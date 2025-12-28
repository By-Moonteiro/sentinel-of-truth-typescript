/**
 * Exibe o menu principal do programa no console.
 */
export function showMenu(): void {
  console.log('\n╔══════════════════════════════╗');
  console.log('║      SENTINEL OF TRUTH       ║');
  console.log('╠══════════════════════════════╣');
  console.log('║ 1 - Cadastrar uma notícia    ║');
  console.log('║ 2 - Consultar notícias       ║');
  console.log('║ 3 - Atualizar uma notícia    ║');
  console.log('║ 4 - Deletar uma notícia      ║');
  console.log('║ 5 - Gerar um relatório       ║');
  console.log('║ 6 - Encerar o programa       ║');
  console.log('╚══════════════════════════════╝');
}

/**
 * Exibe o submenu de consulta de notícias no console.
 */
export function showSubMenu(): void {
  console.log('\n╔═════════════════════════════════╗');
  console.log('║            CHECK NEWS           ║');
  console.log('╠═════════════════════════════════╣');
  console.log('║ 1 - Ver todas as notícias       ║');
  console.log('║ 2 - Ver notícias VERDADEIRAS    ║');
  console.log('║ 3 - Ver notícias FALSAS         ║');
  console.log('║ 4 - Ver notícias NÃO CHECADAS   ║');
  console.log('║ 5 - Retornar                    ║');
  console.log('╚═════════════════════════════════╝');
}