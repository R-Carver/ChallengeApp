import { ChallengesService } from './../challenges.service';
import { Challenge } from './../challenge.model';
import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {

  private challengeId: string;
  challenge: Challenge;
  
  
  safeURL;

  constructor(
    private sanitizer: DomSanitizer,
    private challengeService: ChallengesService,
    private route: ActivatedRoute ) {
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/kdGKeg3mJAI');
  }

  ngOnInit() {
    /*this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.challengeId = paramMap.get('challengeId');
      this.challengeService.getChallenge(this.challengeId)
        .subscribe(challengeData => {
          console.log(challengeData);
          this.challenge = {
            id: challengeData.id,
            title: challengeData.title,
            description: challengeData.description,
            videoLink: challengeData.videoLink,
            task: null,
            reward: null,
            rating: null
          }
        })
    })*/

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.challengeId = paramMap.get('challengeId');
      this.challengeService.getChallenge(this.challengeId)
        .subscribe((challengeData: Challenge) => {
          console.log(challengeData);
          this.challenge = challengeData;
          this.sanitizeVideoUrl(this.challenge.videoLink);
        })
    })
  }

  sanitizeVideoUrl(url: string){
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
