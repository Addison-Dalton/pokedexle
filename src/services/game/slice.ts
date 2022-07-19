import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../services/local-storage';
import { getRange, getGuessedTypes } from './utils';

const initialGuesses: Guesses = {
  guessedTypes: [],
  heightRange: { min: 0, max: 0 },
  weightRange: { min: 0, max: 0 },
  genRange: { min: 0, max: 0 },
  guessedPokemon: []
};

const initialState: GameStore = {
  solution: {
    height: 0,
    weight: 0,
    id: -1,
    name: '',
    order: -1,
    types: [],
    evolutions: [],
    generation: 0
  },
  guesses: initialGuesses,
  gameProgress: getLocalStorage('hideIntro') ? 'game' : 'intro',
  gameSolved: false
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setSolutionPokemon(state, action: PayloadAction<Pokemon | undefined>) {
      const pokemon = action.payload;
      if (pokemon) {
        state.solution = pokemon;
      }
    },
    setGuess(state, action: PayloadAction<Pokemon>) {
      const guessedPokemon = action.payload;
      const { guesses, solution } = state;
      guesses.guessedPokemon.push(guessedPokemon);

      guesses.guessedTypes = getGuessedTypes(
        guessedPokemon.types,
        state.guesses.guessedTypes
      );

      guesses.heightRange = getRange(
        solution.height,
        guesses.heightRange,
        guessedPokemon.height
      );
      guesses.weightRange = getRange(
        solution.weight,
        guesses.weightRange,
        guessedPokemon.weight
      );
      guesses.genRange = getRange(
        solution.generation,
        guesses.genRange,
        guessedPokemon.generation
      );

      // detect if the correct pokemon was guessed.
      if (guessedPokemon.id === solution.id) {
        state.gameProgress = 'end';
        state.gameSolved = true;
      }
    },
    resetGameState(state) {
      return {
        ...initialState,
        gameProgress: 'game'
      };
    },
    setGameProgress(state, action: PayloadAction<GameProgress>) {
      state.gameProgress = action.payload;
    }
  }
});

export const { setSolutionPokemon, setGuess, resetGameState, setGameProgress } =
  gameSlice.actions;
export * from './selectors';
export default gameSlice.reducer;
