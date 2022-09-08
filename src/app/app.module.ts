import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponentModule } from './first-component/first-component.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstComponentModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
