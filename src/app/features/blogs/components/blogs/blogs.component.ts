import { Component, Input, OnInit } from '@angular/core';
import { BlogsEndpoint } from '../../services/blogs.endpoint';
import { Blogs } from '../../types/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass'],
  providers:[BlogsEndpoint]
})
export class BlogsComponent implements OnInit {
  @Input() blogsList: Blogs[] = []

  constructor(  private blogsEndpoint: BlogsEndpoint) { }

  ngOnInit(): void {
    this.blogsEndpoint.getAllBlogs().subscribe((data: Blogs[]) => {
      this.blogsList = data;
      console.log(data)
    })
  }

}