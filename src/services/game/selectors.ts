import { createSelector } from '@reduxjs/toolkit';
import { PokedexleStore } from '../../rootReducer';
export const getGameState = (state: PokedexleStore) => state.game;
export const getGuesses = (state: PokedexleStore) => state.game.guesses;

export const selectSolution = createSelector(
  [getGameState],
  (gameState) => gameState.solution
);

export const selectGuessedPokemon = createSelector(
  [getGuesses],
  (guesses) => guesses.guessedPokemon
);

export const selectGuessedWeight = createSelector(
  [getGuesses],
  (guesses) => guesses.weightRange
);

export const selectGuessedHeight = createSelector(
  [getGuesses],
  (guesses) => guesses.heightRange
);

export const selectGuessedTypes = createSelector(
  [getGuesses],
  (guesses) => guesses.guessedTypes
);

export const selectGameProgress = createSelector(
  [getGameState],
  (state) => state.gameProgress
);

export const selectGameSolved = createSelector(
  [getGameState],
  (state) => state.gameSolved
);
