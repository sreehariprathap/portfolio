import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectData: any = [
    {
      id: 1,
      name: 'Bill Blog',
      description: 'simple blogging app with crud operations and authentication',
      link: 'https://next-blog-6bqx.vercel.app/',
      image: 'assets/bill-blog.png',
      isLive: true,
      gitLink:'https://github.com/sreehariprathap/bill-blog',
      technologies:["react","next","firebase","tailwind","prisma","postgres"]
    },
    {
      id: 2,
      name: 'Hulu',
      description: 'hulu clone with TMDB api integration, styled with tailwind and hosted on netlify',
      link: 'https://monumental-strudel-bdf752.netlify.app/',
      image: 'https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg',
      isLive: true,
      gitLink:'https://github.com/sreehariprathap/hulu',
      technologies:["react","next","tmdb","tailwind"]
    },
    {
      id: 3,
      name: 'Fitness Matters',
      description: 'a full stack health tracking app with angular-ionic as front end and nestJS as backend.',
      link: '',
      image: 'assets/fitness.png',
      isLive: false,
      gitLink:'https://github.com/sreehariprathap/ionic-fitness-matters',
      technologies:["angular","ionic","tailwind","prisma","nestjs"]
    },
    // {
    //   id: 4,
    //   name: 'fitness-matters',
    //   description: 'a full stack health tracking app with angular-ionic as front end and nestJS as backend.',
    //   link: '',
    //   image: 'assets/fitness.png',
    //   isLive: false,
    //   gitLink:'https://github.com/sreehariprathap/ionic-fitness-matters',
    //   technologies:["angular","ionic","tailwind","prisma","nestjs"]
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
