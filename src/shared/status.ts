export type Status = 'True' | 'False' | 'Unverified';

export const STATUS_MAP: Record<number, Status> = {
  1: 'True',
  2: 'False',
  3: 'Unverified'
};
