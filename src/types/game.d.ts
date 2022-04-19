type GameStore = {
  solution: Pokemon;
  guesses: Guesses;
};

type PokemonRange = {
  min: number;
  max: number;
};

type TypeChipVariants = 'standard' | 'eliminated' | 'solution';

type Guesses = {
  guessedTypes: PokemonTypes[];
  weightRange: PokemonRange;
  heightRange: PokemonRange;
  guessedPokemon: Pokemon[];
};

// eventually can expand this to have other non-local storage settings.
type SettingsStore = LocalStorageSettings;
