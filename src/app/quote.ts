export class Quote {
  public showDetails: boolean;
  public showLikes: number;
  public showDislikes: number;

  constructor(
    public count: number,
    public quoteDescription: string,
    public author: string,
    public sender: string, // public votes: number
    public datePublished: Date
  ) {
    this.showDetails = false;
    this.showLikes = 0;
    this.showDislikes = 0;
  }
}
