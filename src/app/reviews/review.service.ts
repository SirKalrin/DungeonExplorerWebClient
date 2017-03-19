import { Injectable } from '@angular/core';
import {Review} from "./review";

@Injectable()
export class ReviewService {

  reviews: Review[];

  constructor() {
    this.reviews = [{id: '0', name : "Amd-MasterRace", description : "Much race such master", rate : 4.9},
      {id: '1', name : "Amd-Budget", description : "Such budget much Amd", rate : 3.9}];
  }

  getReviews(){
    return this.reviews;
  }

  getReview(review: Review){
    return this.reviews.filter(x => x.id === review.id)
  }

  addReview(review: Review){
    this.reviews.push(review);
  }

  deleteReview(review: Review){
    this.reviews.filter(x => x.id === review.id).pop();
  }
}
