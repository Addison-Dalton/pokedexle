type GameStore = {
  solution: Pokemon;
  guesses: Guesses;
  gameState: GameStates;
};

type PokemonRange = {
  min: number;
  max: number;
};

type TypeChipVariants = 'standard' | 'eliminated' | 'solution';
type GameStates = 'intro' | 'game' | 'end';

type Guesses = {
  guessedTypes: PokemonTypes[];
  weightRange: PokemonRange;
  heightRange: PokemonRange;
  guessedPokemon: Pokemon[];
};

// eventually can expand this to have other non-local storage settings.
type SettingsStore = LocalStorageSettings;
