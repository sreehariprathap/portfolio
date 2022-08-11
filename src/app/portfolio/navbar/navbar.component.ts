import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/app.animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [fadeAnimation]

})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
