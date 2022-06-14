import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared-module';
import { HomeContainer } from './containers/home.container';
import { HomeView } from './views/home-view/home.view';
import { PerformanceIndexComponent } from './components/performance-index/performance-index.component';
import { RecentBlogsComponent } from './components/recent-blogs/recent-blogs.component';
import { ViewsModule } from 'src/app/views/common-header/views.module';


@NgModule({
  declarations: [
    HomeContainer,
    HomeView,
    PerformanceIndexComponent,
    RecentBlogsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ViewsModule
  ]
})
export class HomeModule { }
