type GameStore = {
  solution: Pokemon;
  guesses: Guesses
}

type PokemonRange = {
  min: number;
  max: number;
}

type Guesses = {
  eliminatedTypes: string[];
  weightRange: PokemonRange;
  heightRange: PokemonRange;
  guessedPokemon: Pokemon[];
}