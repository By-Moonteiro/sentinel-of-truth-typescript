import { News } from '../models/news';
import { NewsService } from '../services/newsService';
import { OperationResult } from '../shared/operationResult';

import { 
 getStatusChoice,
 urlInput,
 inputNewsId,
 confirmInput
 } from '../ui/userInput';

 /**
  * Controlador responsável por gerenciar as operações relacionadas às notícias.
  * Interage com o NewsService para realizar operações de CRUD e outras funcionalidades.
  */
export class NewsController {
    
  constructor(private newsService: NewsService) {
  }

  /**
   * Solicita ao usuário os dados para adicionar uma nova notícia ao BD.
   * @returns true se a notícia foi adicionada com sucesso, false caso contrário.
   */
  async insertNews(): Promise<boolean> {

    const url = await urlInput();
    const status = await getStatusChoice();

    const result = this.newsService.addNews(status, url);

    switch (result) {

      case OperationResult.SUCCESS:
        return true;

      case OperationResult.ERROR:
        console.log('Erro ao adicionar notícia.');
        break;
    }
    return false;
  }

  /**
   *  Solicita ao usuário o ID da notícia e verifica se ela existe.
   *  Caso exista, solicita o novo status e edita a notícia.
   * @returns true se a notícia foi editada com sucesso, false caso contrário.
   */
  async changeNews(): Promise<boolean> {

    const id = await inputNewsId();
    const status = await getStatusChoice();

    const result = this.newsService.editNews(id, status);

    switch (result) {

      case OperationResult.NOT_FOUND:
        console.log('Notícia não encontrada.');
        return false;

      case OperationResult.ERROR:
        console.log('Erro ao editar notícia.');
        return false;

      default:
        return true;
    }
  }

  /**
   * Solicita ao usuário o ID da notícia a ser removida.
   * Verifica se a notícia existe e pede confirmação antes de removê-la.
   * @returns true se a notícia foi removida com sucesso, false caso contrário.
   */
  async removeNews(): Promise<boolean> {

    const id = await inputNewsId();
    const confirm = await confirmInput();

    if (!confirm) {
      console.log('Ação cancelada pelo usuário.');
      return false;
    }

    const result = this.newsService.removeNews(id);

    switch (result) {

      case OperationResult.NOT_FOUND:
        console.log('Notícia não encontrada.');
        return false;

      case OperationResult.ERROR:
        console.log('Erro ao remover notícia.');
        return false;

      default:
        return true;
    }
  }

  // Observação:
  // Os métodos do service sempre retornam fallback seguro em caso de erro
  // (listas vazias ou 0). O controller apenas loga o erro e repassa o data.

  /**
   * Obtêm um array com todas as notícias cadastradas ou um log do erro.
   * @returns Array com todas as notícias cadastradas (Em caso de erro, retorna lista vazio).
   */
  loadAllNews(): News[] {

    const { result, data } = this.newsService.loadAllNews();

    if (result === OperationResult.ERROR) {
      console.log('Erro ao carregar as notícias.');
      return data;
    } 
      return data;
  }

  /**
   * Obtêm um array com todas as notícias com o status especificado ou um log de erro.
   * @param status O status da notícia que deseja.
   * @returns Array com todas as notícias cadastradas (Em caso de erro, retorna lista vazio).
   */
  loadNewsByStatus(status: string): News[] {

    const { result, data } = this.newsService.getNewsByStatus(status);

    if (result === OperationResult.ERROR) {
      console.log('Erro ao carregar as notícias.');
      return data;
    } 
      return data;
  }

  /**
   * Obtêm a quantidade de notícias cadastradas ou um log do erro.
   * @returns Retorna a quantidade de notícias cadastradas.
   */
  async countAllNews(): Promise<number> {
    const { result, data } = await this.newsService.countAllNews();

    if (result === OperationResult.ERROR) {
      console.log('Erro ao contar as notícias.');
      return data;
    }

    return data;
  }

  /**
   * Obtêm a quantidade de notícias cadastradas com o status especificado ou um log do erro.
   * @param status O status da notícia que deseja contar.
   * @returns Retorna a quantidade de notícias cadastradas com o status escolhido.
   */
  async countNewsByStatus(status: string): Promise<number> {
    const {result, data} = await this.newsService.countNewsByStatus(status);

    if (result === OperationResult.ERROR) {
      console.log('Erro ao contar as notícias.');
      return data;
    }

    return data;
  }
}