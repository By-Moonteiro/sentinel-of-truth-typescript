import { writeFile } from 'fs/promises';
import { formatReport } from '../utils/reportFormatter';
import { REPORT } from '../utils/config';
import { ReportService } from '../services/reportService';

export class ReportController {
  constructor(private reportService: ReportService) {}

  /**
   * Gera um relatório e o salva em um arquivo de texto.
   * @param filePath Caminho do arquivo onde o relatório será salvo.
   */
  async generateReport(): Promise<void> {
    const data = await this.reportService.generateReport();
    const content = formatReport(data);

    await writeFile(REPORT, content, { encoding: 'utf-8' });

    console.log(`Relatório gerado com sucesso em: ${REPORT}`);
  }
}