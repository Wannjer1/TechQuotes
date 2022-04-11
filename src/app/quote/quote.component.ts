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
  ];
  constructor() {}

  ngOnInit(): void {}
}
