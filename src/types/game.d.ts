type GameStore = {
  solution: Pokemon;
  guesses: Guesses;
  gameProgress: GameProgress;
  gameSolved: boolean;
};

type PokemonRange = {
  min: number;
  max: number;
};

type TypeChipVariants = 'standard' | 'eliminated' | 'solution';
type GameProgress = 'intro' | 'game' | 'end';

type Guesses = {
  guessedTypes: PokemonTypes[];
  weightRange: PokemonRange;
  heightRange: PokemonRange;
  genRange: PokemonRange;
  guessedPokemon: Pokemon[];
};

// eventually can expand this to have other non-local storage settings.
type SettingsStore = LocalStorageSettings;
