import { News } from '../models/news'


/**
 * Interface Abstrata para o Banco de Dados
 */
export interface INewsRepository {

  // Adiciona uma notícia ao Banco de dados
  createNews(news: News): boolean;

  // Obtêm todas as notícias
  getAllNews(): News[];

  // Atualiza o status de uma notícia existente
  updateNews(id: number, newStatus: string): boolean;

  // Deleta uma notícia permanentemente caso ela exista
  deleteNews(id: number): boolean;

  // Procura uma notícia pelo Id
  getById(id: number): News | undefined;

  // Busca todas as notícias com status específicos
  getAllNewsStatus(status: string): News[];

  // Obtêm o numero total de notícias cadastradas.
  countNews(): number;

  // Obtêm o numero total de notícias por status.
  countNewsStatus(status: string): number;

}