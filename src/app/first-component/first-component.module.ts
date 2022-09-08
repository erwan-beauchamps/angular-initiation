import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component.component';
import { MatCommonModule } from '../mat-common.module';
import { FirstPipePipe } from '../first-pipe.pipe';
import { SharedPipeModule } from '../shared-pipe.module';

@NgModule({
  declarations: [FirstComponentComponent],
  imports: [
    CommonModule,
    MatCommonModule,
    SharedPipeModule
  ],
  exports: [FirstComponentComponent]
})
export class FirstComponentModule { }