import { useCallback } from 'react';
import { setSolutionPokemon, resetGameState } from '../../services/game/slice';
import { selectSettings } from '../../services/settings/selectors';
import { useAppDispatch, useAppSelector } from '../../services/redux/hooks';
import { getRandomPokemon } from '../../services/pokedex/utils';

export const useGame = () => {
  const dispatch = useAppDispatch();
  const { generations } = useAppSelector((state) => selectSettings(state));

  const setGame = useCallback(() => {
    dispatch(resetGameState());
    const newPokemon = getRandomPokemon(generations);
    dispatch(setSolutionPokemon(newPokemon));
  }, [generations, dispatch]);

  return {
    setGame
  };
};
