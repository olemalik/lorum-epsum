import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { BlogsEndpoint } from '../../blogs/services/blogs.endpoint';
import { Blogs } from '../../blogs/types/blogs';

@Injectable()

export class HomeEndpoint {

  constructor(
    private apiService: ApiService,
    private blogsEndpoint: BlogsEndpoint
  ) { }

  getKPIData(): Observable<any> {
    return this.apiService.get<any>("http://localhost:3000/kpi", null);
  }

  getRecentBlogs(): Observable<Blogs[]> {
    return this.blogsEndpoint.getRecentBlogs();
  }
}
