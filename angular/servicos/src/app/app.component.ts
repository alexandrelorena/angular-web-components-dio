import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="card-div">
      <h1>Services Angular</h1>
      <app-card></app-card>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'services';
}
