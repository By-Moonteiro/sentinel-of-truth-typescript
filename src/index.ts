import 'dotenv/config';
import pool from '../src/shared/pool'
import { NewsController } from './controller/newsController';
import { MenuController } from './controller/menuController';
import { ReportController } from './controller/reportController';

import { NewsService } from './services/newsService';
import { ReportService } from './services/reportService';

import { PostgreSQLRepository } from './repository/postgreRepository';

import { closeInput } from './ui/userInput';
import { NewsDisplay } from './ui/display';




async function main(): Promise<void> {

  const repository = new PostgreSQLRepository(pool);
  const service = new NewsService(repository);
  const controller = new NewsController(service);
  const display = new NewsDisplay(controller);

  const reportService = new ReportService(service);
  const reportController = new ReportController(reportService);

  const menu = new MenuController(
    display, 
    controller, 
    reportController
  );

  try{
    await menu.run();
  } 
  
  catch (error) {
    console.error('Ocorreu um erro inesperado:', error);
  }
  
  finally {
    repository.closeDataBase();
    closeInput();
  }
}
