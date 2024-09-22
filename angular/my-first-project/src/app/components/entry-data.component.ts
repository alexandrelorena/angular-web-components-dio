import { Component } from '@angular/core';

@Component({
	selector: 'app-entry-data',
	// standalone: true,
	// imports: [],
	templateUrl: './entry-data.component.html',
	styleUrl: './entry-data.component.css',
})
export class EntryDataComponent {
	placeholder: string = 'email';
	placepass: string = 'senha';
	color: string = 'red'; // style binding
}
