import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  quotes: Quote[]= [
    new Quote('Timothy Mugendi', 'The way to get started is to quit talking and begin doing.', 'Walt Disney', new Date(2021,7,14)),
    new Quote('Barry Barrack', 'Whereof one cannot speak, thereof one must be silent', 'Ludwig Wittgenstein', new Date(2020,3,14))
  ];

  toDelete(isDelete:any, index:any) {
    if(isDelete) {
      const toDelete= confirm('Are you sure you want to delete this quote?')
      if(toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }


  addNewQuote(quote: Quote) {
    quote.publishedDate = new Date(quote.publishedDate);
    this.quotes.push(quote)
  };


  ngOnInit(): void {
  }

}
