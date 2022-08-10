import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeAnimation]
})
export class AboutComponent implements OnInit {
  career:boolean = true;
  education:boolean = false;
  skills:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleCareer(){
    this.career = true;
    this.education = false;
    this.skills = false;
  }
  toggleEducation(){
    this.career = false;
    this.education = true;
    this.skills = false;
  }
  toggleSkills(){
    this.career = false;
    this.education = false;
    this.skills = true;
  }

}
