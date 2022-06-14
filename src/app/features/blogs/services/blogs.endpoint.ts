import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { Blogs } from '../types/blogs';

@Injectable()

export class BlogsEndpoint {
  constructor(
    private apiService: ApiService
  ) { }

  getRecentBlogs(): Observable<Blogs[]> {
    return this.apiService.get<Blogs>("http://localhost:3000/recentblogs", null)
  }

  getAllBlogs(): Observable<Blogs[]> {
    return this.apiService.get<Blogs>("http://localhost:3000/allblogs", null)
  }
}