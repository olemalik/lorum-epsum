import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared-module';
import { MainBlogsContainer } from './containers/main-blogs/main-blogs.container';
import { BlogsViewComponent } from './views/blogs-view/blogs.view';
import { BlogsComponent } from './components/blogs/blogs.component';


@NgModule({
  declarations: [
    MainBlogsContainer,
    BlogsViewComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class BlogsModule { }
