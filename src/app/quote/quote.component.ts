import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {
      quote:
        'It has become appallingly obvious that our technology has exceeded our humanity.',
      author: 'Albert Einstein',
      sender: 'Vivian Chemu',
      votes: 0,
    },

    {
      quote:
        'The advance of technology is based on making it fit in so that you do not really even notice it, so it is part of everyday life.',
      author: 'Bill Gates',
      sender: 'Albert Ndegwa',
      votes: 0,
    },

    {
      quote:
        'It has become appallingly obvious that our technology has exceeded our humanity.',
      author: 'Albert Einstein',
      sender: 'Vivian Chemu',
      votes: 0,
    },

    {
      quote:
        'It has become appallingly obvious that our technology has exceeded our humanity.',
      author: 'Albert Einstein',
      sender: 'Vivian Chemu',
      votes: 0,
    },
  ];

  votesliked: number = 0;
  votesdisliked: number = 0;
  functionlike() {
    this.votesliked++;
  }

  functiondisliked() {
    this.votesdisliked++;
  }

  functiondelete(i: any) {
    this.quotes.splice(i);
  }

  constructor() {}

  ngOnInit(): void {}
}
