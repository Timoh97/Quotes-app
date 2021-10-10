import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Myproject } from '../myproject';





@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {



  projects: Myproject[] = [
    new Myproject('Aristotle', 'We are what we repeatedly do. Excellence then, is not an act, but a habit.', 'Timothy Mugendi',new Date(2020,3,14)),
    new Myproject('Mahatma Gandhi','Live as if you were to die tomorrow. Learn as if you were to learn forever.','Timothy Mugendi',new Date(2019,6,9)),
    new Myproject('Plato','Wise men talk because they have something to say, fools because they have to say something.','Timothy Mugendi',new Date(2022,1,12)),

  ];


  numberOfLikes:number=0;
  numberOfLike:number=0;
  numberOfLikes1:number=0;
  numberOfLike1:number=0;
  numberOfLikes2:number=0;
  numberOfLike2:number=0;
  numberOfLikes3:number=0;
  numberOfLike3:number=0;
  numberOfLikes4:number=0;
  numberOfLike4:number=0;
  numberOfLikes5:number=0;
  numberOfLike5:number=0;
  numberOfLikes6:number=0;
  numberOfLike6:number=0;


  likeButtonClick1() {
    this.numberOfLikes1++
      };

  dislikeButtonClick1() {
    this.numberOfLike1--
       };

  likeButtonClick2() {
        this.numberOfLikes2++
          };

  dislikeButtonClick2() {
            this.numberOfLike2--
           };

  likeButtonClick3() {
            this.numberOfLikes3++
              };

  dislikeButtonClick3() {
                this.numberOfLike3--
               };

  likeButtonClick4() {
                this.numberOfLikes4++
                  };

  dislikeButtonClick4() {
                    this.numberOfLike4--
                   };
  likeButtonClick5() {
                    this.numberOfLikes5++
                      };

  dislikeButtonClick5() {
                        this.numberOfLike5--
                       };
                       likeButtonClick6() {
                        this.numberOfLikes6++
                          };

                      dislikeButtonClick6() {
                            this.numberOfLike6--
                           };
  likeButtonClick() {
this.numberOfLikes++
  };

  dislikeButtonClick() {
    this.numberOfLike--
   };

  constructor() {


   }ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
;



}





