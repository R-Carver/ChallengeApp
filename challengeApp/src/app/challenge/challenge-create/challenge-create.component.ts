import { Challenge } from './../challenge.model';
import { ChallengesService } from './../challenges.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-challenge-create',
  templateUrl: './challenge-create.component.html',
  styleUrls: ['./challenge-create.component.css']
})
export class ChallengeCreateComponent implements OnInit {

  form: FormGroup;
  imagePreview: string;
  
  challenge: Challenge;

  constructor(private challengesService : ChallengesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'title': new FormControl(null, {validators: [Validators.required]}),
      'description': new FormControl(null, null),
      'task': new FormControl(null, null),
      'videoLink': new FormControl(null, null),
      'image': new FormControl(null)
    });
  }

  onImagePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
    
  }

  onSaveChallenge(){
    if(this.form.invalid){
      return;
    }
    this.challengesService.addChallenge(
          this.form.value.title, 
          this.form.value.description, 
          this.form.value.videoLink,
          this.form.value.task);
    this.form.reset();
  }
}
