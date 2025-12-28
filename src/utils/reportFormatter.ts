import { ReportData } from '../services/reportService';

/**
 * Formata os dados do relatório em uma string legível.
 * @param report Dados do relatório a ser formatado
 * @returns String formatada do relatório
 */
export function formatReport(report: ReportData): string {
  return `
╔═════════════════════════════════════════════════════════╗
║                        RELATÓRIO                        ║
╠═════════════════════════════════════════════════════════╣
 Total de Notícias Cadastradas: ${report.total}

 Distribuição por Status:
  -> Notícias Verdadeiras: ${report.trueCount} (${report.percentTrue.toFixed(1)}%)
  -> Notícias Falsas: ${report.falseCount} (${report.percentFalse.toFixed(1)}%)
  -> Notícias Não Checadas: ${report.unverifiedCount} (${report.percentUnverified.toFixed(1)}%)
╚═════════════════════════════════════════════════════════╝
`;
}
