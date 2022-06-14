import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
//import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
//import {MatTooltipModule} from '@angular/material/tooltip';
//import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared-module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavigatorComponent,
        SidebarComponent,
        //DashboardComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule
        //MatTooltipModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        NavigatorComponent,
        SidebarComponent,
        //DashboardComponent
    ]
})

export class LayoutModule { }