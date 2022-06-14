import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { User } from '../types/user';

@Injectable()

export class UserEndpoint {

  constructor(
    private apiService: ApiService
  ) { }

  getAllUsers(): Observable<User[]> {
    return this.apiService.get<User[]>("http://localhost:3000/users", null);
  }

}
