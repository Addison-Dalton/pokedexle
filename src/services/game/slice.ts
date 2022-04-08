import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRange, getElimatedTypes } from './utils';

const initialGuesses: Guesses = {
  eliminatedTypes: [],
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
  guesses: initialGuesses
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

      guesses.eliminatedTypes = getElimatedTypes(
        solution.types,
        guessedPokemon.types,
        state.guesses.eliminatedTypes
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
    }
  }
});

export const { setSolutionPokemon, setGuess, resetGuesses } = gameSlice.actions;
export * from './selectors';
export default gameSlice.reducer;
