import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/app.animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [fadeAnimation]

})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
