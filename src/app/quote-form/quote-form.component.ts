import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {



newQuote = new Quotes ('','','');


@Output () postQuote= new EventEmitter<Quotes>()

submitQuote(){
this.postQuote.emit(this.newQuote)
}


  constructor() { }

  ngOnInit(){
  }

}
