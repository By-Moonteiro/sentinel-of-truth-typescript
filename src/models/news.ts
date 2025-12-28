/**
 * Representa uma notícia para ser guardada.
 */
export interface INews {
  id?: number;
  url: string;
  status: string;
};

export class News implements INews {
    /**
     * Cria uma nova notícia.
     * @param id Id da notícia (Opcional)
     * @param url Url da notícia
     * @param status Status da notícia
    */
  constructor(
    public url: string,
    public status: string,
    public id?: number
  ) {}
}
