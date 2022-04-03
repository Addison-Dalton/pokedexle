type Pokemon = {
  height: number;
  id: number;
  name: string;
  order: number;
  types: string[];
  weight: number;
  evolutions: string[];
}

type Pokedex = {
  pokemon: Pokemon[];
}