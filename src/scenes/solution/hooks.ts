import { useAppSelector } from '../../services/redux/hooks';
import {
  selectSolution,
  selectGuessedHeight,
  selectGuessedWeight,
  selectGuessedTypes,
  selectGuessedPokemon
} from '../../services/game/selectors';
import { convertWeight, convertHeight } from '../../services/pokedex/utils';
import { getMetricRangeDisplay } from '../../services/game/utils';

export const useSolution = () => {
  const solution = useAppSelector(selectSolution);
  const guessedWeight = useAppSelector(selectGuessedWeight);
  const guessedHeight = useAppSelector(selectGuessedHeight);
  const guessedTypes = useAppSelector(selectGuessedTypes);
  const guessedPokemon = useAppSelector(selectGuessedPokemon);

  return {
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
