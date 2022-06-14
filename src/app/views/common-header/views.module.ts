import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared-module';
import { CommonHeaderComponent } from './common-header.component';


@NgModule({
  declarations: [
    CommonHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CommonHeaderComponent
  ]
})
export class ViewsModule { }
