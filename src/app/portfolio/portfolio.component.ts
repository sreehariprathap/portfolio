import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showBtn$ = fromEvent(document, 'scroll').pipe(
    debounceTime(50),
    map(() => window.scrollY > 500),
    tap(() => console.log('sas'))
  );

  // not Cross browsing (works on chrome - firefox)
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

}
