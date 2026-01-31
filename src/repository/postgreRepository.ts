import { Pool } from 'pg'
import { INewsRepository } from './iNewsRepository'; // Interface de contrato
import { INews } from '../models/news'; // Interface da Classe Modelo

export class PostgreSQLRepository implements INewsRepository {
  constructor(private pool: Pool) {};

  async createNews(news: INews): Promise<boolean> {
    const query = `INSERT INTO news (url, status) VALUES ($1, $2)`;

    const result = await this.pool.query(query, [news.url, news.status]);
     
    return result.rowCount! > 0;
  };

  async getAllNews(): Promise<INews[]> {
    const query = `SELECT * FROM news`

    const { rows } = await this.pool.query<INews>(query);

    return rows;
  };

  async updateNews(id: number, newStatus: string): Promise<boolean> {
    const query = `UPDATE news SET status = $1 WHERE id = $2`;

    const result = await this.pool.query(query, [newStatus, id]);

    return result.rowCount! > 0;
  };

  async deleteNews(id: number): Promise<boolean> {
    const query = `DELETE FROM news WHERE id = $1`;

    const result = await this.pool.query(query, [id]);

    return result.rowCount! > 0;
  }

  async getById(id: number): Promise<INews | null> {
    const query = `SELECT id, url, status FROM news WHERE id = $1`;

    const { rows } = await this.pool.query<INews>(query, [id]);

    return rows[0] ?? null;
  }

  async getAllNewsStatus(status: string): Promise<INews[]> {
    const query = `SELECT * FROM news WHERE status = $1`;

    const { rows } = await this.pool.query<INews>(query, [status]);

    return rows ?? null;
  }

  async countNews(): Promise<number> {
    const query = `SELECT COUNT(*) FROM news`

    const { rows } = await this.pool.query<{ count: string }>(query);

    return parseInt(rows[0].count);
  }

  async countNewsStatus(status: string): Promise<number> {
    const query = `SELECT COUNT(*) FROM news WHERE status = $1`;

    const { rows } = await this.pool.query<{ count: string }>(query, [status]);

    return parseInt(rows[0].count);
  };

  closeDataBase(): void {
    this.pool.end()
  }
}