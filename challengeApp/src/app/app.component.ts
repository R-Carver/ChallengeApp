import { ChallengesService } from './challenge/challenges.service';
import { Component } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challengeApp';
  currentUrl : String;

  constructor(private router: Router, private challengesService: ChallengesService){

    router.events.subscribe((val) => {
      
      if(val instanceof NavigationStart){
        this.currentUrl = val.url;
        console.log(this.currentUrl);
      }
    })
  }

  onTestClicked(){
    /*this.challengesService.getChallenge()
        .subscribe((data)=>{
          console.log(data);
        });*/
      this.challengesService.getChallenges();
  }

}
