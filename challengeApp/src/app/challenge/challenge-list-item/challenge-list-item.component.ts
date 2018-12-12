import { Challenge } from './../challenge.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-list-item',
  templateUrl: './challenge-list-item.component.html',
  styleUrls: ['./challenge-list-item.component.css']
})
export class ChallengeListItemComponent implements OnInit {

  @Input() challenge: Challenge;

  constructor() { }

  ngOnInit() {
    console.log(this.challenge.id);
  }

}
