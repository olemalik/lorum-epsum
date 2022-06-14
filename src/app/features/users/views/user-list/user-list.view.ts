import { Component, OnInit } from '@angular/core';
import { UserEndpoint } from '../../services/user.endpoint';
import { User } from '../../types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.view.html',
  styleUrls: ['./user-list.view.sass'],
  providers: [UserEndpoint]
})
export class UserListView implements OnInit {
  userList: User[] = [];
  isGridView: boolean = false;

  constructor(
    private userEndpoint: UserEndpoint
  ) { }

  ngOnInit(): void {
    this.userEndpoint.getAllUsers().subscribe((data: User[]) => {
      this.userList = data;
    })
  }

}
