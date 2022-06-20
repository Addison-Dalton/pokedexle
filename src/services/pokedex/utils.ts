import pokedex from '../../data/pokedex.json';
import { randomIntFromInterval } from '../utils/random';

export const getPokemon = (id: number) => {
  const { pokemon } = pokedex as Pokedex;
  return pokemon.find((p) => p.id === id);
};

export const getPokedex = () => {
  return pokedex as Pokedex;
};

export const getAllTypes = (): PokemonTypes[] => {
  return [
    'normal',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dark',
    'dragon',
    'steel',
    'fairy'
  ];
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

// only meant to be used with generation info, so keeping this pretty simple
export const convertToRomanNumeral = (generation: number) => {
  const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VII', 'IX', 'X'];
  if (generation > numerals.length) return generation.toString();

  // generation starts at 1, so minus by 1 to account for that
  const numeral = numerals[generation - 1];
  if (!numeral) return generation.toString();

  return numeral;
};
