/**
 * Representa uma notícia para ser guardada.
 */
export class News {
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