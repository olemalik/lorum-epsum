import { Component, Input, OnInit } from '@angular/core';
import { Blogs } from '../../types/blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {
  @Input() blogsList: Blogs[] = []

  constructor() { }

  ngOnInit(): void {
  }

}