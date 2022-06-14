import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../types/user';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.sass']
})
export class UsersGridComponent implements OnInit {
  @Input() userList: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}