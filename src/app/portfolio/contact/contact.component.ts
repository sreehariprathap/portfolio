import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/app.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeAnimation]

})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
