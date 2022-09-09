import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'first-application';

  constructor(private router: Router) { }

  goTo(page: string): void {
    this.router.navigate([page]);
  }
}
