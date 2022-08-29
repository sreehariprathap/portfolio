import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    BlogComponent,
    NavComponent,
    SideComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FontAwesomeModule
  ]
})
export class BlogModule { }
