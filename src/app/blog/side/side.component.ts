import { Component, OnInit } from '@angular/core';
import { faHome,faGlobe,faHeart,faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss'],
})
export class SideComponent implements OnInit {
  constructor() {}
  faHome = faHome;
  faGlobe = faGlobe;
  faHeart = faHeart;
  faStar = faStar;
  ngOnInit(): void {}
}
