import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component.component';
import { MatCommonModule } from '../mat-common.module';
import { SharedPipeModule } from '../shared-pipe.module';
import { MessageBoxModule } from '../message-box/message-box.module';

@NgModule({
  declarations: [FirstComponentComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    SharedPipeModule,
    MessageBoxModule
  ],
  exports: [FirstComponentComponent]
})
export class FirstComponentModule { }