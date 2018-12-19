import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import { Challenge } from './challenge.model';

@Injectable({
    providedIn: 'root'
})

export class ChallengesService{
    private challenges: Challenge[] = [];
    private challegengesUpdated = new Subject<Challenge[]>();
    
    constructor(private http: HttpClient, private router: Router){}

    addChallenge(
        title: string, 
        description: string, 
        videoLink: string, 
        task:string,
        image: File){
        /*const challenge: Challenge = {
            id: null,
            title: title,
            description: description,
            videoLink: videoLink,
            task: task,
            reward: null,
            rating: null
        };*/

        //we use the FormData object here because it can combine json and blob (file) values
        const challengeData = new FormData();
        challengeData.append("title", title);
        challengeData.append("description", description);
        challengeData.append("videoLink", videoLink);
        challengeData.append("task", task);
        //the first argument here must match the string which is passed to the
        //multer().single("bla") function in challenge.js
        challengeData.append("image", image, title);


        this.http.post<{message: string, challengeId: string}>('http://localhost:3000/api/challenges', challengeData)
        //this.http.post<{message: string, challengeId: string}>('http://challengeapp-env.swmfmp2gwb.us-east-1.elasticbeanstalk.com/api/challenges', challenge)
            .subscribe((responseData) => {
                console.log("Request for adding a challenge was sent");
                this.router.navigate(["/"]);
            });
    }

    getChallenges(){
        this.http.get<{message: string, challenges: any}>('http://localhost:3000/api/challenges')
        //this.http.get<{message: string, challenges: any}>('http://challengeapp-env.swmfmp2gwb.us-east-1.elasticbeanstalk.com/api/challenges')
            .pipe(map((challengeData) => {
                return challengeData.challenges.map(challenge => {
                    return{
                        title: challenge.title,
                        description: challenge.description,
                        videoLink: challenge.videoLink,
                        id: challenge._id,
                        task: challenge.task
                    };
                });
            }))
            .subscribe((transformedChallenges) => {
                console.log(transformedChallenges);

                this.challenges = transformedChallenges;
                this.challegengesUpdated.next([...this.challenges]);
            });
    }

    getChallengeUpdateListener(){
        return this.challegengesUpdated.asObservable();
    }

    /*getChallenge(id: string){
        return this.http.get<{challenge: any}>('http://localhost:3000/api/challenges/' + id)
            .pipe(map((challengeData) => {
                    return challengeData.challenge.map(challenge =>{
                        return{
                            title: challenge.title,
                            description: challenge.description,
                            videoLink: challenge.videoLink,
                            id: challenge._id
                        };
                    });
                }))
            
    }*/

    getChallenge(id: string){
        return this.http.get<Challenge>('http://localhost:3000/api/challenges/' + id);
        //return this.http.get<Challenge>('http://challengeapp-env.swmfmp2gwb.us-east-1.elasticbeanstalk.com/api/challenges/' + id);
            
    }

}