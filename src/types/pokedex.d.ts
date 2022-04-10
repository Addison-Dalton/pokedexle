type Pokemon = {
  height: number;
  id: number;
  name: string;
  order: number;
  types: PokemonTypes[];
  weight: number;
  evolutions: string[];
};

type Pokedex = {
  pokemon: Pokemon[];
};

type PokemonTypes =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dark'
  | 'dragon'
  | 'steel'
  | 'fairy';
