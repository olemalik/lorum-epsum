import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { MainComponent } from './formation/components/main/main.component';
import { LayoutModule } from '../layout/layout.module';

import {SharedModule} from '../shared/shared-module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AppRoutingModule,
    SharedModule,
  ]
})
export class CoreModule { }