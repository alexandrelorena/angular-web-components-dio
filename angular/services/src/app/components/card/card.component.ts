import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  name: string = 'CHARIZARD';
  attributesTypes: string[] = ['FIRE', 'ROCK'];
  constructor(private service: PokemonService) {}
  ngOnInit(): void {
    this.service.getPokemon('bulbasauro');
  }
}
