import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AppRoutingModule } from '../app-routing.module';
import {SharedModule} from '../shared/shared-module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    SidebarComponent,
  ]
})

export class LayoutModule { }