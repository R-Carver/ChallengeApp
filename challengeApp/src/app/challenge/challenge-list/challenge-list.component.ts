import { Challenge } from './../challenge.model';
import { ChallengesService } from './../challenges.service';
import { Component, OnInit } from '@angular/core';
import {Subscription, Subject} from 'rxjs';


@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {

  challenges : Challenge[] = [];
  private challengesSub: Subscription;

  constructor(private challengeService: ChallengesService) { }

  ngOnInit() {
    this.challengeService.getChallenges();
    this.challengesSub = this.challengeService.getChallengeUpdateListener()
      .subscribe((challenges: Challenge[]) => {
        this.challenges = challenges;
      })
  }

}
