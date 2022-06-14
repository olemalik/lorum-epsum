import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared-module';
import { MainBlogsContainer } from './containers/main-blogs/main-blogs.container';
import { BlogsViewComponent } from './views/blogs-view/blogs.view';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ViewsModule } from 'src/app/views/common-header/views.module';


@NgModule({
  declarations: [
    MainBlogsContainer,
    BlogsViewComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ViewsModule
  ]
})
export class BlogsModule { }
