import { ReportController } from './reportController';
import { NewsController } from './newsController';

import { showMenu, showSubMenu } from '../ui/menu';
import { getMenuChoice } from '../ui/userInput';
import { NewsDisplay } from '../ui/display';
import { clearScreen } from '../utils/helpers';

export class MenuController {

  private actions = new Map<number, () => Promise<boolean>>([

      [1, async () => {
        await this.newsController.insertNews();
        return true;
      }],
      [2, async () => {
        await this.runSubMenu();
        return true;
      }],
      [3, async () => {
        await this.newsController.changeNews();
        return true;
      }],
      [4, async () => {
        await this.newsController.removeNews();
        return true;
      }],
      [5, async () => {
        await this.reportController.generateReport();
        return true;
      }],
      [6, async () => {
        return false; // Saída do menu principal
      }]
    ]);

  private subActions = new Map<number, () => Promise<boolean>>([

    [1, async () => {
      await this.newsDisplay.displayAllNews();
      return true;
    }],
    [2, async () => {
      await this.newsDisplay.displayNewsByStatus('Notícias Verdadeiras', 'Verdadeiro');
      return true;
    }],
    [3, async () => {
      await this.newsDisplay.displayNewsByStatus('Notícias Falsas', 'Falso');
      return true;
    }],
    [4, async () => {
      await this.newsDisplay.displayNewsByStatus('Notícias Não Checadas', 'Não Checado');
      return true;
    }],
    [5, async () => {
      return false; // Saída do submenu
    }]
  ]);

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
      const action = this.actions.get(choice);

      if (!action) {
        console.log("Opção inválida.");
        continue;
      }

      clearScreen();
      running = await action();
    }
  }

  private async runSubMenu(): Promise<void> {
    let subRunning = true;

    while (subRunning) {
      showSubMenu();

      const subChoice = await getMenuChoice(1, 5);
      const subAction = this.subActions.get(subChoice);

      if (!subAction) {
        console.log("Opção inválida.");
        continue;
      }
      
      clearScreen();
      subRunning = await subAction();
      }
    }
  }