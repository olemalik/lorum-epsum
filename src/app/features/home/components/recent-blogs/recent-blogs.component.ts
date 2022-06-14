import { Component, Input, OnInit } from '@angular/core';
import { Blogs } from 'src/app/features/blogs/types/blogs';

@Component({
  selector: 'app-recent-blogs',
  templateUrl: './recent-blogs.component.html',
  styleUrls: ['./recent-blogs.component.sass']
})
export class RecentBlogsComponent implements OnInit {
  @Input() blogsList: Blogs[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}