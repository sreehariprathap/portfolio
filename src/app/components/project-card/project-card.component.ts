import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() isLive!: boolean;
  @Input() link!: string;
  @Input() gitLink!: string;
  @Input() technologies: any;

  constructor() {}

  ngOnInit(): void {}
}
