import { Routes } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { FirstPage } from './first-page/first-page';
import { SecondPage } from './second-page/second-page';

export const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  {
    path: 'first-page',
    component: FirstPage,
  },
  {
    path: 'second-page',
    component: SecondPage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
