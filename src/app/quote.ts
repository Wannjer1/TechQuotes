export class Quote {
  constructor(
    public count: number,
    public quoteDescription: string,
    public author: string,
    public sender: string // public votes: number
  ) {}
}
