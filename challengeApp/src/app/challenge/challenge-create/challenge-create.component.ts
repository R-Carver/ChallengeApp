import { Challenge } from './../challenge.model';
import { ChallengesService } from './../challenges.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-challenge-create',
  templateUrl: './challenge-create.component.html',
  styleUrls: ['./challenge-create.component.css']
})
export class ChallengeCreateComponent implements OnInit {

  challenge: Challenge;

  constructor(private challengesService : ChallengesService) { }

  ngOnInit() {
  }

  onSaveChallenge(form: NgForm){
    if(form.invalid){
      return;
    }
    this.challengesService.addChallenge(
          form.value.title, 
          form.value.description, 
          form.value.videoLink,
          form.value.task);
  }

}
