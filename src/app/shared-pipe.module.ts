import { FirstPipePipe } from './first-pipe.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FirstPipePipe],
  imports: [],
  exports: [FirstPipePipe]
})
export class SharedPipeModule { }