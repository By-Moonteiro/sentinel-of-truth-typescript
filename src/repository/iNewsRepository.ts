import { News } from '../models/news'


/**
 * Interface Abstrata para o Banco de Dados
 */
export interface INewsRepository {

  // Adiciona uma notícia ao Banco de dados
  createNews(url: string, status: string): Promise<News>;

  // Obtêm todas as notícias
  getAllNews(): Promise<News[]>;

  // Atualiza o status de uma notícia existente
  updateNews(id: number, newStatus: string): Promise<boolean>;

  // Deleta uma notícia permanentemente caso ela exista
  deleteNews(id: number): Promise<boolean>

  // Procura uma notícia pelo Id
  getById(id: number): Promise<News | undefined>;

  // Busca todas as notícias com status específicos
  getAllNewsStatus(status: string): Promise<News[]>;

  // Obtêm o numero total de notícias cadastradas.
  countNews(): Promise<number>;

  // Obtêm o numero total de notícias por status.
  countNewsStatus(status: string): Promise<number>

}