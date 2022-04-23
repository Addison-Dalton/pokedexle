import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../services/local-storage';
import { getRange, getGuessedTypes } from './utils';

const initialGuesses: Guesses = {
  guessedTypes: [],
  heightRange: { min: 0, max: 0 },
  weightRange: { min: 0, max: 0 },
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
    evolutions: []
  },
  guesses: initialGuesses,
  gameState: getLocalStorage('hideIntro') ? 'game' : 'intro'
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
    },
    resetGuesses(state) {
      state.guesses = initialGuesses;
    },
    setGameState(state, action: PayloadAction<GameStates>) {
      state.gameState = action.payload;
    }
  }
});

export const { setSolutionPokemon, setGuess, resetGuesses, setGameState } =
  gameSlice.actions;
export * from './selectors';
export default gameSlice.reducer;
