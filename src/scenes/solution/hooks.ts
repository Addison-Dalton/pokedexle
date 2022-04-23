import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../services/redux/hooks';
import {
  setGameProgress,
  selectSolution,
  selectGuessedHeight,
  selectGuessedWeight,
  selectGuessedTypes,
  selectGuessedPokemon,
  selectGameProgress,
  selectGameSolved
} from '../../services/game/slice';
import { convertWeight, convertHeight } from '../../services/pokedex/utils';
import { getMetricRangeDisplay } from '../../services/game/utils';

const MAX_GUESSES = 6;

export const useSolution = () => {
  const dispatch = useAppDispatch();
  const solution = useAppSelector(selectSolution);
  const guessedPokemon = useAppSelector(selectGuessedPokemon);

  useEffect(() => {
    if (guessedPokemon.length >= MAX_GUESSES) {
      dispatch(setGameProgress('end'));
    }
  }, [guessedPokemon.length, dispatch]);

  return {
    solution,
    numberOfGuesses: guessedPokemon.length
  };
};

export const useSolutionGuessInfo = () => {
  const solution = useAppSelector(selectSolution);
  const guessedWeight = useAppSelector(selectGuessedWeight);
  const guessedHeight = useAppSelector(selectGuessedHeight);
  const guessedTypes = useAppSelector(selectGuessedTypes);
  const guessedPokemon = useAppSelector(selectGuessedPokemon);
  const gameProgress = useAppSelector(selectGameProgress);

  return {
    gameProgress,
    solution,
    guessedTypes,
    numberOfGuesses: guessedPokemon.length,
    weightRange: getMetricRangeDisplay(
      guessedWeight.min,
      guessedWeight.max,
      convertWeight
    ),
    heightRange: getMetricRangeDisplay(
      guessedHeight.min,
      guessedHeight.max,
      convertHeight
    )
  };
};

export const useSolutionInfo = () => {
  const solution = useAppSelector(selectSolution);
  const gameProgress = useAppSelector(selectGameProgress);
  const gameSolved = useAppSelector(selectGameSolved);
  const guessedPokemon = useAppSelector(selectGuessedPokemon);
  const { weight, height } = solution;

  return {
    gameProgress,
    gameSolved,
    solution,
    displayWeight: convertWeight(weight),
    displayHeight: convertHeight(height),
    numberOfGuesses: guessedPokemon.length
  };
};
