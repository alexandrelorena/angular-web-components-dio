import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  title: string;

  produtos: string[] = [];
  menuType: string = 'superuser';

  constructor() {
    this.title = 'diretivas-proj';
    this.produtos = ['mouse', 'teclado', 'cabo', 'fonte'];
  }

  adicionar() {
    this.produtos.push();
  }

  remover(index: number) {
    alert(index);
    this.produtos.splice(index, 1);
  }
}
