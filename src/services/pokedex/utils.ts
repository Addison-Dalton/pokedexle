import pokedex from '../../data/pokedex.json';
import { randomIntFromInterval } from '../utils/random';

export const getPokemon = (id: number) => {
  const { pokemon } = pokedex as Pokedex;
  return pokemon.find((p) => p.id === id);
};

export const getPokedex = () => {
  return pokedex as Pokedex;
};

// for now, calls the pokedex to get the number of pokemon
export const getRandomPokemon = () => {
  const { pokemon } = pokedex as Pokedex;
  const randomId = randomIntFromInterval(1, pokemon.length);
  return getPokemon(randomId);
};

// converts height from decimetres to ft/in
export const convertHeight = (height: number) => {
  const DECIMETER_TO_INCH = 3.93701;
  const totalInches = height * DECIMETER_TO_INCH;

  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;

  if (feet === 0) return `${inches.toFixed(0)}"`;
  return `${feet}' ${inches.toFixed(0)}"`;
};

// converts weight from hectograms to lbs
export const convertWeight = (weight: number) => {
  const HECTOGRAM_TO_POUND = 0.220462;
  const pounds = weight * HECTOGRAM_TO_POUND;
  return `${pounds.toFixed(2)} lbs`;
};

// sprites served from: https://github.com/PokeAPI/sprites
export const getPokemonSpriteUrl = (id: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};
