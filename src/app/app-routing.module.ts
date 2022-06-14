import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './core/formation/components/main/main.component';
import { MainBlogsContainer } from './features/blogs/containers/main-blogs/main-blogs.container';
import { HomeContainer } from './features/home/containers/home.container';
import { MainUsersContainer } from './features/users/containers/main-users/main-users.container';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
        {
            path: 'home',
            component: HomeContainer,
        },
        {
            path: 'users',
            component: MainUsersContainer,
        },
        {
          path: 'blogs',
          component: MainBlogsContainer,
        },
    ],
    data: {
        //title: appsettings.titles.myHealth
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
