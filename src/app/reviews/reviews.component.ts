import { Component, OnInit } from '@angular/core';
import {Review} from "./review";
//Contoller
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews : Review[]
  newReview : Review;

  constructor() {
    this.reviews = [

    ]

    this.newReview = new Review();
  }

  ngOnInit() {
  }

  SubmitReview()
  {
    this.reviews.push(this.newReview);
    this.newReview = new Review();
  }

}
