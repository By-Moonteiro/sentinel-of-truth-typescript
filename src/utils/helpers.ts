import readline from 'node:readline';

/**
 * Limpa a tela do console.
 */
export function clearScreen(): void {
  console.clear();
}

export function waitForEnter(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Pressione Enter para continuar...', () => {
      rl.close();
      resolve();
    });
  });
}