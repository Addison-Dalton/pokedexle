type GameStore = {
  solution: Pokemon;
  guesses: Guesses;
};

type PokemonRange = {
  min: number;
  max: number;
};

type Guesses = {
  eliminatedTypes: string[];
  weightRange: PokemonRange;
  heightRange: PokemonRange;
  guessedPokemon: Pokemon[];
};

// eventually can expand this to have other non-local storage settings.
type SettingsStore = LocalStorageSettings;
