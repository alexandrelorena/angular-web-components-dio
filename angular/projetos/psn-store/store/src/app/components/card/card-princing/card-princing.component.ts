import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-princing',
	templateUrl: './card-princing.component.html',
	styleUrl: './card-princing.component.css',
})
export class CardPrincingComponent implements OnInit {
	@Input()
	gameType: string = 'Digital PS4';

	@Input()
	gamePrice: string = 'R$ 399,90';
	constructor() {}

	ngOnInit(): void {}
}
