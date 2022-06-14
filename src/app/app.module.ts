import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared-module';
import { UsersModule } from './features/users/users.module';
import { HomeModule } from './features/home/home.module';
import { BlogsModule } from './features/blogs/blogs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    SharedModule,
    HomeModule,
    UsersModule,
    BlogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
