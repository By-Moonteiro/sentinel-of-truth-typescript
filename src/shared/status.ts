export type Status = 'Verdadeiro' | 'Falso' | 'Não Checado';

export const STATUS_MAP: Record<number, Status> = {
  1: 'Verdadeiro',
  2: 'Falso',
  3: 'Não Checado'
};
