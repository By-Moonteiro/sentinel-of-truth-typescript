import { createInterface } from 'readline';

const STATUS: Record<number, string> = {
  1: 'Verdadeiro',
  2: 'Falso',
  3: 'Não Checado'
};

// Tamanho máximo de caracteres que uma url pode ter
const MAX_URL_LENGTH = 500; 

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Fecha a conexão com o input do readline (stdin)
 */
export function closeInput(): void {
  rl.close();
}

/**
 * Recebe uma pergunta como parâmetro e retorna a resposta do usuário.
 * @param msg Pergunta que deseja ser feita para o usuário.
 * @returns Uma string com o input digitado.
 */
function stringInput(msg: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(msg, (res) => resolve(res.trim()));
  });
}

/**
 * Pede um input repetidamente até que um número válido seja informado.
 * @param msg Pergunta que deseja ser feita para o usuário.
 * @returns Número inteiro
 */
async function numberInput(msg: string): Promise<number> {

  while (true) {
    const value = await stringInput(msg);

    if (value === '') {
      console.log('➤ Essa opção não pode estar vazia.');
      continue;
    }
    
    const num = Number(value);

    if (Number.isInteger(num)) {
      return num;
    }

    console.log('➤ Digite um número válido.');
  }
}

/**
 * Solicita repetidamente ao usuário uma escolha de status válida.
 * @returns Status válido escolhido pelo usuário.
 */
export async function getStatusChoice(): Promise<string> {

  console.log('Status: [ 1 ]: Verdadeiro | [ 2 ]: Falso | [ 3 ]: Não Checado');

  while (true) {
    const status = await numberInput('➤ Digite o Status desejado: ');

    if (status in STATUS) {
      return STATUS[status];
  }

    console.log('➤ Opção inválida! Escolha uma opção Válida.');
  }
}

/**
 * Solicita repetidamente uma entrada do usuário até que um valor
 * numérico válido dentro do intervalo permitido seja informado.
 * @param start Valor inicial do intervalo (inclusivo)
 * @param end Valor final do intervalo (inclusivo)
 * @returns Opção válida entre o intervalo descrito
 */
export async function getMenuChoice(start: number, end: number): Promise<number> {

  while (true) {
    const option = await numberInput('➤ Escolha uma opção: ');

    if (option >= start && option <= end) {
      return option;
    }

    console.log(`➤ Opção inválida. Escolha uma opção entre ${start} e ${end}`);
  }
}

/**
 * Pede uma confirmação do usuário.
 * @returns Retorna true se for uma opção de confirmação (1 | s | sim)
 */
export async function confirmInput(): Promise<boolean> {
  
  console.log('[ 1 ] Sim | [ 2 ] Não')
  const confirm = (
    await stringInput('➤ Tem certeza que deseja efetuar a sua ação? ')
  ).toLowerCase();

  if (['s', '1', 'sim'].includes(confirm)) {
    return true;
  }

  console.log(
    `➤ Ação cancelada. Tente repetir a ação novamente se desejar.`
    
  );
  return false;
}

/**
 * Solicita repetidamente um ID válido que seja numérico e maior que zero.
 * @returns ID válido
 */
export async function inputNewsId(): Promise<number> {
  while (true) {
    const id = await numberInput('➤ Digite o ID da notícia: ');

    if (id > 0) {
      return id;
    }

    console.log('➤ ID inválido. Digite um numero maior que 0');
  }
}

/**
 * Solicita repetidamente uma URL pro usuário que satisfaça as condições
 * válidas (Não pode ser vazio | Não pode ser maior que o tamanho permitido).
 * @returns A URL validada.
 */
export async function urlInput(): Promise<string> {

  while (true) {

    const url = await stringInput('➤ Digite a URL da notícia: ');

    if (url.length > MAX_URL_LENGTH) {
      console.log(
      `➤ URL muito grande. tamanho máximo permitido: ${MAX_URL_LENGTH}`
        );

      continue;
    }

    return url;
  } 
}