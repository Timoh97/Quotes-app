import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
    quotes: Quotes []=[
      new Quotes (
        'Plato','Timothy Mugendi','I have ever worried my speech, never my silence'
      ),

     new Quotes ('Socrates','Kelvin','Unexamine life is not worth living')
    ];
  postNewQuote (quote: any){
    this.quotes.push (quote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
