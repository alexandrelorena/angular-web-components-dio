import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css'],
})

// conceito de intrpolação de dados
export class ButtonComponent {
	@Input() label: string = '';

	buttonText: string = 'ACESSAR';
	buttonTexts: string[] = ['VENDER', 'COMPRAR'];
	buttonNumber: number = 1;
	buttonObject = {
		label: 'adicionar ao carrinho',
	};

	getAlert(num: number) {
		alert(num);
	}
}
