import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserEndpoint } from '../../services/user.endpoint';
import { User } from '../../types/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass'],
  providers: [UserEndpoint]
})
export class UsersTableComponent implements OnInit {
  @Input() userList: User[] = [];

  displayedColumns: string[] = ['name', 'designation', 'joiningdate'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor() {}

  ngOnInit() {
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

}
