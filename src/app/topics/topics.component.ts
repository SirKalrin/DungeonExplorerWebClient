import { Component, OnInit } from '@angular/core';
import {Topic} from "./topic";

@Component({
  selector: 'mrr-topics',
  templateUrl: 'topics.component.html',
  styleUrls: ['topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics : Topic[]
  newTopic : Topic;

  constructor() {
    this.topics = [

    ]

    this.newTopic = new Topic();
  }

  ngOnInit() {
  }

  SubmitReview()
  {
    this.topics.push(this.newTopic);
    this.newTopic = new Topic();
  }
}
