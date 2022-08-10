import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
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
