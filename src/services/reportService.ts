import { NewsService } from '../services/newsService';
import { OperationResult } from '../shared/operationResult';

/**
 * Dados do relatório gerado pelo ReportService.
 */
export interface ReportData {
  total: number;
  trueCount: number;
  falseCount: number;
  unverifiedCount: number;
  percentTrue: number;
  percentFalse: number;
  percentUnverified: number;
}

/**
 * Serviço responsável por gerar relatórios baseados nas notícias gerenciadas pelo NewsService.
 */
export class ReportService {
  constructor(private service: NewsService) {}

  /**
   * Gera um relatório com estatísticas das notícias.
   * @returns Dados do relatório gerado
   */
  async generateReport(): Promise<ReportData> {
    const total = await this.service.countAllNews();
    const trueCount = await this.service.countNewsByStatus('Verdadeiro');
    const falseCount = await this.service.countNewsByStatus('Falso');
    const unverifiedCount = await this.service.countNewsByStatus('Não Checado');

    if (
      total.result !== OperationResult.SUCCESS || 
      trueCount.result !== OperationResult.SUCCESS ||
      falseCount.result !== OperationResult.SUCCESS ||
      unverifiedCount.result !== OperationResult.SUCCESS
    ) {

      return this.emptyReport();
    }

    if (total.data === 0) {
      return this.emptyReport(); // relatório vazio, porém vazio
    }

    return {
      total: total.data,
      trueCount: trueCount.data,
      falseCount: falseCount.data,
      unverifiedCount: unverifiedCount.data,
      percentTrue: (trueCount.data / total.data) * 100,
      percentFalse: (falseCount.data / total.data) * 100,
      percentUnverified: (unverifiedCount.data / total.data) * 100
    };
  }

  /**
   * Gera um relatório vazio.
   * @returns Dados do relatório vazio
   */
  private emptyReport(): ReportData {
    return {
      total: 0,
      trueCount: 0,
      falseCount: 0,
      unverifiedCount: 0,
      percentTrue: 0,
      percentFalse: 0,
      percentUnverified: 0
    };
  }
}