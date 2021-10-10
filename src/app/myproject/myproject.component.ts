import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {

  numberOfLikes:number=0;
  numberOfLikes1:number=0;
  numberOfLikes2:number=0;
  numberOfLikes3:number=0;
  numberOfLikes4:number=0;
  numberOfLikes5:number=0;
  numberOfLikes6:number=0;


  likeButtonClick1() {
    this.numberOfLikes1++
      };

  dislikeButtonClick1() {
        this.numberOfLikes1--
       };

  likeButtonClick2() {
        this.numberOfLikes2++
          };

  dislikeButtonClick2() {
            this.numberOfLikes2--
           };

  likeButtonClick3() {
            this.numberOfLikes3++
              };

  dislikeButtonClick3() {
                this.numberOfLikes3--
               };

  likeButtonClick4() {
                this.numberOfLikes4++
                  };

  dislikeButtonClick4() {
                    this.numberOfLikes4--
                   };
  likeButtonClick5() {
                    this.numberOfLikes5++
                      };

  dislikeButtonClick5() {
                        this.numberOfLikes5--
                       };
                       likeButtonClick6() {
                        this.numberOfLikes6++
                          };

                      dislikeButtonClick6() {
                            this.numberOfLikes6--
                           };
  likeButtonClick() {
this.numberOfLikes++
  };

  dislikeButtonClick() {
    this.numberOfLikes--
   };

  constructor() {


   }ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
;



}





