import { NewsController } from '../controller/newsController';
import { clearScreen } from '../utils/helpers';
import { waitForEnter } from '../utils/helpers';
export class NewsDisplay {

  constructor(
    private controller: NewsController
  ) {};

  private static LINE_LENGTH = 90;

  private printLine(char = '='): void {
    console.log(char.repeat(NewsDisplay.LINE_LENGTH));
  }

  private printCentered(text: string): void {
    const padding = Math.max (
      0, 
      Math.floor((NewsDisplay.LINE_LENGTH - text.length) / 2)
    );
    console.log(' '.repeat(padding) + text); 
  }

  private printFloor (): void {
    this.printLine();
  }

  /**
   * Exibe um cabeçalho formatado no console.
   * @param title Titulo do cabeçalho
   */
  private printHeader(title: string): void {
    clearScreen();
    this.printLine();
    this.printCentered(title);
    this.printLine();
    console.log();
  }

  /**
   * Exibe todas as notícias cadastradas e um cabeçalho.
   * @returns Exibe as notícias formatadas no console (Id | URL | Status)
   */
  async displayAllNews(): Promise<void> {
    this.printHeader('Todas as Notícias');

    const newsList = this.controller.loadAllNews();

    if (newsList.length === 0) {
      console.log('Nenhuma notícia cadastrada.');
      this.printFloor();
      await waitForEnter();
      return;
    }

    for (const news of newsList) {
      console.log(`Id: ${news.id} | URL: ${news.url} | Status: ${news.status}`);
    }

    this.printFloor();
    await waitForEnter();
  }

  /**
   * Recebe um status e exibe todas as notícias que possuem esse status.
   * @param title Titulo do cabeçalho
   * @param status Status da notícia que deseja exibir no cabeçalho
   * @returns Exibe as notícias formatadas no console (Id | URL | Status)
   */
  async displayNewsByStatus(title: string, status: string): Promise<void> {
    this.printHeader(title);

    const filterNews = this.controller.loadNewsByStatus(status);

    if (filterNews.length === 0) {
      console.log(`Nenhuma notícia encontrada com status: ${status}.`);
      this.printFloor();
      await waitForEnter();
      return;
    }

    for (const news of filterNews) {
      console.log(`Id: ${news.id} | URL: ${news.url} | Status: ${news.status}`);
    }

    this.printFloor();
    await waitForEnter();
  }
}