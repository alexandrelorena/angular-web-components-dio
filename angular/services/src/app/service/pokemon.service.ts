import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseURL: string = '';

  constructor() {
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string) {}
}
