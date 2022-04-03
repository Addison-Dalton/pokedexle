import pokedex from '../../data/pokedex.json';
import { randomIntFromInterval } from '../utils/random';

export const getPokemon = (id: number) => {
  const { pokemon } = pokedex as Pokedex;
  return pokemon.find((p) => p.id === id);
}

// for now, calls the pokedex to get the number of pokemon
export const getRandomPokemon = () => {
  const { pokemon } = pokedex as Pokedex;
  const randomId = randomIntFromInterval(1, pokemon.length);
  return getPokemon(randomId);
}