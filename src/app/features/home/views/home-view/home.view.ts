import { Component, OnInit } from '@angular/core';
import { BlogsEndpoint } from 'src/app/features/blogs/services/blogs.endpoint';
import { Blogs } from 'src/app/features/blogs/types/blogs';
import { HomeEndpoint } from '../../services/home.Endpoint';

@Component({
  selector: 'app-home-view',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.sass'],
  providers: [HomeEndpoint,BlogsEndpoint]
})
export class HomeView implements OnInit {
  kpiData: any;
  recentBlogs: Blogs[] = [];

  constructor(
    private homeEndpoint: HomeEndpoint
  ) { }

  ngOnInit(): void {
    this.homeEndpoint.getKPIData().subscribe((data: any) => {
      this.kpiData = data[0];
      console.log(data[0])
    })

    this.homeEndpoint.getRecentBlogs().subscribe((data: Blogs[]) => {
      this.recentBlogs = data;
    })
  }

}
