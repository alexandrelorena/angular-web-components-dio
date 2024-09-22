import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { ButtonComponent } from './components/button.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'], // Correto
})
export class AppComponent {
	// [x: string]: any;
	obj = { name: 'Angular' }; // Definição do objeto
	title = 'Angular 17+';
	buttonLabel: string = 'CARRINHO';
	buttonSecond: string = 'ADICIONAR AOS FAVORITOS';
}
