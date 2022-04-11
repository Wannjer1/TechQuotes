import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'It has become appallingly obvious that our technology has exceeded our humanity.',
      'Albert Einstein',
      'Vivian Chemu'
    ),
    new Quote(
      2,
      'The advance of technology is based on making it fit in so that you do not really even notice it, so it is part of everyday life.',
      'Bill Gates',
      'Albert Ndegwa'
    ),
    new Quote(
      3,
      'The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.',
      'Tim Berners-Lee',
      'Jack Daniels'
    ),
    new Quote(
      4,
      'It has become appallingly obvious that our technology has exceeded our humanity.',
      'Albert Einstein',
      'Vivian Chemu'
    ),
  ];
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.count = quoteLength + 1;
    this.quotes.push(quote);
  }

  votesliked: number = 0;
  votesdisliked: number = 0;

  functionlike() {
    this.votesliked++;
  }

  functiondisliked() {
    this.votesdisliked++;
  }

  functiondelete(i: any) {
    this.quotes.splice(i, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
