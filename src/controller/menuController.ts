import { ReportController } from './reportController';
import { NewsController } from './newsController';

import { showMenu, showSubMenu } from '../ui/menu';
import { getMenuChoice } from '../ui/userInput';
import { NewsDisplay } from '../ui/display';
import { clearScreen } from '../utils/helpers';

export class MenuController {

  constructor(
    private newsDisplay: NewsDisplay,
    private newsController: NewsController,
    private reportController: ReportController
  ) {}

  async run(): Promise<void> {
    let running = true;

    while (running) {
      showMenu();

      const choice = await getMenuChoice(1, 6);

      switch (choice) {
        case 1:
          clearScreen();
          await this.newsController.insertNews();
          break;
        case 2:
          clearScreen();
          await this.runSubMenu();
          break;
        case 3:
          clearScreen();
          await this.newsController.changeNews();
          break;
        case 4:
          clearScreen();
          await this.newsController.removeNews();
          break;
        case 5:
          clearScreen();
          await this.reportController.generateReport();
          break;
        case 6:
          clearScreen();
          running = false;
          console.log("Encerrando o programa...");
          break;
      }
    }
  }

  private async runSubMenu(): Promise<void> {
    let subRunning = true;

    while (subRunning) {
      showSubMenu();

      const subChoice = await getMenuChoice(1, 5);

      switch (subChoice) {
      case 1:
        await this.newsDisplay.displayAllNews();
        clearScreen();
        break;
      case 2:
        await this.newsDisplay.displayNewsByStatus('Notícias Verdadeiras', 'Verdadeiro');
        clearScreen();
        break;
      case 3:
        await this.newsDisplay.displayNewsByStatus('Notícias Falsas', 'Falso');
        clearScreen();
        break;
      case 4:
        await this.newsDisplay.displayNewsByStatus('Notícias Não Checadas', 'Não Checado');
        clearScreen();
        break;
      case 5:
        subRunning = false;
        clearScreen();
        break;
      }
    }
  }
}