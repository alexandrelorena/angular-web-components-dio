import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css',
})
export class CompAtributosComponent {
  estilo: string = 'disable';
  corFundo: string = 'blue';
  corDaFonte: string = 'yellow';
  item: string = '';
  lista: string[] = [];

  adicionarLista() {
    this.lista.push(this.item);
  }
  trocar() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }
}
