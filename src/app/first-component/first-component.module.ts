import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component.component';
import { MatCommonModule } from '../mat-common.module';

@NgModule({
  declarations: [FirstComponentComponent],
  imports: [
    CommonModule,
    MatCommonModule
  ],
  exports: [FirstComponentComponent]
})
export class FirstComponentModule { }