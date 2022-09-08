import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule
  ]
})
export class MatCommonModule { }