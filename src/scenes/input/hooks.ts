import { ChangeEvent, useState, useCallback, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';

import { useAppDispatch, useAppSelector } from '../../services/redux/hooks';
import { setGuess, selectGameProgress } from '../../services/game/slice';
import { getSetting } from '../../services/settings/slice';
import { getPokedex } from '../../services/pokedex/utils';

export const useForm = () => {
  const SEARCH_LIMIT = 6;
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
  const [disableInput, setDisableInput] = useState(false);
  const dispatch = useAppDispatch();
  const gameState = useAppSelector(selectGameProgress);
  const { pokemon } = getPokedex();
  const fuse = useMemo(
    () => new Fuse(pokemon, { keys: ['name', 'types'], threshold: 0.3 }),
    [pokemon]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value;
      setSearchValue(searchValue);

      const results = fuse
        .search(searchValue, { limit: SEARCH_LIMIT })
        .map((r) => r.item);
      setSearchResults(results);
    },
    [fuse]
  );

  const handleSearchSelect = useCallback(
    (searchItem: Pokemon) => {
      setSearchValue('');
      dispatch(setGuess(searchItem));
      setSearchResults([]);
    },
    [dispatch]
  );

  useEffect(() => {
    if (gameState === 'end') setDisableInput(true);
  }, [gameState]);

  return {
    value: searchValue,
    searchResults,
    disableInput,
    handleChange,
    handleSearchSelect
  };
};

export const useSearchListItem = () => {
  const hardMode = useAppSelector((state) => getSetting(state, 'hardMode'));

  return { hardMode };
};
