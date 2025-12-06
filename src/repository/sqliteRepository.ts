import Database, { Database as DatabaseType } from 'better-sqlite3';
import type { Statement } from 'better-sqlite3';

import { DATA, REPORT } from '../utils/config'; // Caminhos
import { INewsRepository } from './iNewsRepository'; // Interface de contrato
import { News } from '../models/news'; // Classe Modelo
import { Count } from '../types/count'; // Interface de tipagem

/**
 * Responsável por adquirir e salvar os dados do programa.
 */
export class SQLiteRepository implements INewsRepository{
  private db: DatabaseType;

  private insertStmt: Statement;
  private updateStmt: Statement;
  private loadStmt: Statement;
  private findByIdStmt: Statement;
  private deleteStmt: Statement;
  private searchStatusStmt: Statement;
  private countAllStmt: Statement;
  private countEachStmt: Statement;

  constructor() {

    const dbPath = DATA;
    this.db = new Database(dbPath);
    
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT NOT NULL,
      status TEXT NOT NULL
      )
    `);

    /**
     * Statements. 
     *  
     * - Criado para pre-compilar um comando SQL;  
     * - Mais eficiente para múltiplas execuções;
     * - Evita SQL injection automaticamente.
     */

    this.insertStmt = this.db.prepare(`
      INSERT INTO news (url, status) VALUES (?, ?)`);
    
    this.updateStmt = this.db.prepare(`
      UPDATE news SET status = ? WHERE id = ?`);

    this.loadStmt = this.db.prepare(`SELECT * FROM news`);
    
    this.findByIdStmt = this.db.prepare(`
      SELECT id, url, status FROM news WHERE id = ?`);
    
    this.deleteStmt = this.db.prepare(`
      DELETE FROM news WHERE id = ?`);

    this.searchStatusStmt = this.db.prepare(`
      SELECT * FROM news WHERE status = ?`);  

    this.countAllStmt = this.db.prepare(`
      SELECT COUNT(*) AS total FROM news`);
   
    this.countEachStmt = this.db.prepare(`
      SELECT COUNT(*) AS total FROM news WHERE status = ?`);
  }
  
  /**
   * Registra uma notícia no BD.
   * @param news Entidade contendo url e status.
   * @returns True se adicionou | False se ocorreu um erro.
   */
  createNews(news: News): boolean {
      const result = this.insertStmt.run(news.url, news.status)
      return result.lastInsertRowid > 0;
  }
  
  /**
   * Busca todas as notícias salvas no BD.
   * @returns Retorna uma lista de objetos contendo id, url, status
   */
  getAllNews(): News[]{
      return this.loadStmt.all() as News[];
  }

  /**
   * Atualiza o status de uma notícia existente.
   * @param id Id da notícia que deseja atualizar.
   * @param newStatus Novo status para a notícia.
   * @returns true se atualizou | false caso tenha dado algum erro
   */
  updateNews(id: number, newStatus: string): boolean {
      const result = this.updateStmt.run(newStatus, id);
      return result.changes > 0;

  }

  /**
   * Deleta uma notícia do BD permanentemente (caso ela exista).
   * @param id Id da notícia que vai ser deletada.
   * @returns true se apagou | false se ocorreu algum erro.
   */
  deleteNews(id: number): boolean {
      const result = this.deleteStmt.run(id)
      return result.changes > 0;
  }

  /**
   * Procura uma notícia no Banco de dados
   * @param id Id da notícia que vai ser procurada.
   * @returns Retorna o objeto contendo o id, url, status | undefined caso ela não exista
   */
  getById(id: number): News | undefined {
      return this.findByIdStmt.get(id) as News | undefined;   
  }

  /**
   * Filtra todas as notícias de algum status salvo no BD
   * @param status Status da notícia que deseja filtrar
   * @returns Uma lista com todas as notícias com status específico
   */
  getAllNewsStatus(status: string): News[] {
      return this.searchStatusStmt.all(status) as News[];
      
  }

  /**
   * Conta quantas notícias foram salvas no Banco de Dados
   * @returns Total de notícias salvas
   */
  countNews(): number {
      const { total } = this.countAllStmt.get() as Count;
      return total;
    }

  /**
   * Conta quantas notícias foram salvas de um status específico no BD.
   * @returns Total de notícias salvas de algum status.
   */
  countNewsStatus(status: string): number {
      const { total } = this.countEachStmt.get(status) as Count;
      return total;
  }

  /**
   * Fecha o Banco de dados.
   */
  closeDataBase(): void {
    this.db.close()
  }

}