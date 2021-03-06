import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { MainUsersContainer } from './containers/main-users/main-users.container';
import { UserListView } from './views/user-list/user-list.view';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersGridComponent } from './components/users-grid/users-grid.component';

import { SharedModule } from 'src/app/shared/shared-module';
import { ViewsModule } from 'src/app/views/common-header/views.module';


@NgModule({
  declarations: [
    MainUsersContainer,
    UserListView,
    UsersTableComponent,
    UsersGridComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ViewsModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
