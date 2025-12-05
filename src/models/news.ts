/**
 * Representa uma notícia para ser guardada.
 */
interface INews {
  url: string;
  status: string;
};

export class News implements INews {
    /**
     * Cria uma nova notícia.
     * @param url Url da notícia
     * @param status Status da notícia
    */
  constructor(
    public url: string,
    public status: string
  ) {}
}
