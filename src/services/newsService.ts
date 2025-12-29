import { INewsRepository } from '../repository/iNewsRepository';
import { News } from '../models/news';
import { OperationResult } from '../shared/operationResult';

/**
 * Serviço responsável por gerenciar operações relacionadas a notícias.
 */
export class NewsService {
  constructor(private newsRepository: INewsRepository) {}

  /**
   * Adiciona uma nova notícia ao repositório.
   * @param url Url necessária para a criação da notícia
   * @param status Status da notícia
   * @returns Resultado da operação de adição da notícia (SUCCESS, ERROR).
   */
  async addNews(url: string, status: string): Promise<OperationResult> {
    
    try {

      const news = new News(url, status);

      const success = await this.newsRepository.createNews(news);

      if (!success) {
        return OperationResult.ERROR;
      }
      
      return OperationResult.SUCCESS;

    } catch (_) {
      return OperationResult.ERROR;
    }  
  }

  /**
   * Edita o status de uma notícia existente.
   * @param id ID da notícia a ser editada
   * @param newStatus Novo status da notícia
   * @returns Resultado da operação de edição da notícia (SUCCESS, ERROR ou NOT_FOUND).
   */
  async editNews(id: number, newStatus: string): Promise<OperationResult> {

    try {

      const news = await this.newsRepository.getById(id);

      if (!news) {
        return OperationResult.NOT_FOUND;
      }

      const success = await this.newsRepository.updateNews(id, newStatus);

      if (!success) {
        return OperationResult.ERROR;
      }

      return OperationResult.SUCCESS;

    } catch (_) {
      return OperationResult.ERROR;
    }  
  }

  /**
   * Remove uma notícia existente do repositório.
   * @param id ID da notícia a ser removida.
   * @returns Resultado da operação de remoção da notícia (SUCCESS, ERROR ou NOT_FOUND).
   */
  async removeNews(id: number): Promise<OperationResult> {

    try {

      const news = await this.newsRepository.getById(id);

      if (!news) {
        return OperationResult.NOT_FOUND;
      }
      const success = await this.newsRepository.deleteNews(id);

      if (!success) {
        return OperationResult.ERROR;
      }
      
      return OperationResult.SUCCESS;

    } catch (_) {
      return OperationResult.ERROR;   
    }   
  }

  /**
   * Carrega todas as notícias do repositório.
   * @returns Resultado da operação e um array das notícias buscadas.
   * @example { result: OperationResult.SUCCESS, data: [News] }
   */
  async loadAllNews(): Promise<{ result: OperationResult, data: News[] }> {

    try {
      const newsList = await this.newsRepository.getAllNews();

      return { result: OperationResult.SUCCESS, data: newsList };

    } catch (_) {

      return { result: OperationResult.ERROR, data: [] };
    }
  }

  /**
   * Carrega todas as notícias do repositório com base no status especificado.
   * @param status Status da notícia que deseja buscar.
   * @returns Resultado da operação e um array das notícias buscadas com o status solicitado.
   * @example { result: OperationResult.SUCCESS, data: [News] }
   */
  async getNewsByStatus(status: string): Promise<{ result: OperationResult, data: News[] }> {
    try {
      const filterNews = await this.newsRepository.getAllNewsStatus(status);

      return { result: OperationResult.SUCCESS, data: filterNews };

    } catch (_) {

      return { result: OperationResult.ERROR, data: [] };
    }
  }

  /**
   * Conta o número total de notícias salvas no repositório.
   * @returns Resultado da operação e o total de notícias salvas.
   * @example { result: OperationResult.SUCCESS, data: 10 }
   */
  async countAllNews(): Promise<{ result: OperationResult, data: number }> {

    try {
      const totalNews = await this.newsRepository.countNews();

      return { result: OperationResult.SUCCESS, data: totalNews };

    } catch (_) {
      return { result: OperationResult.ERROR, data: 0 };
    }
  }

  /**
   * Conta o número total de notícias com base no status especificado.
   * @param status Status da notícia que deseja contar.
   * @returns Resultado da operação e o total de notícias salvas.
   * @example { result: OperationResult.SUCCESS, data: 3 }
   */
  async countNewsByStatus(status: string): Promise<{ result: OperationResult, data: number }> {

    try {
      const totalNewsStatus = await this.newsRepository.countNewsStatus(status);

      return { result: OperationResult.SUCCESS, data: totalNewsStatus };

    } catch (_) {
      return { result: OperationResult.ERROR, data: 0 };
    }
  }
}