import { Component, OnInit } from '@angular/core';
import { BlogsEndpoint } from '../../services/blogs.endpoint';
import { Blogs } from '../../types/blogs';

@Component({
  selector: 'app-blogs-view',
  templateUrl: './blogs.view.html',
  styleUrls: ['./blogs.view.sass'],
  providers: [BlogsEndpoint]
})
export class BlogsViewComponent implements OnInit {
  allBlogs: Blogs[] = []

  constructor(
    private blogsEndpoint: BlogsEndpoint
  ) { }

  ngOnInit(): void {
    this.blogsEndpoint.getRecentBlogs().subscribe((data: Blogs[]) => {
      this.allBlogs = data;
    })
  }

}
