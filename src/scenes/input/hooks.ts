import {
  ChangeEvent,
  useState,
  useCallback,
  useMemo,
  useEffect,
  FocusEvent
} from 'react';
import Fuse from 'fuse.js';

import { useAppDispatch, useAppSelector } from '../../services/redux/hooks';
import { setGuess, selectGameProgress } from '../../services/game/slice';
import { getSetting } from '../../services/settings/slice';
import { getPokedex } from '../../services/pokedex/utils';

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
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
        .search(searchValue)
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

  const handleInputFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  }, []);

  useEffect(() => {
    const handleCloseSearch = (e: Event) => {
      // @ts-ignore - complain id doesn't exist, while technically true that's what I'm checking
      if (e.target.id !== 'pokemon-search-input') {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('click', handleCloseSearch);

    const unsub = () =>
      document.removeEventListener('click', handleCloseSearch);
    return unsub;
  }, [searchResults]);

  useEffect(() => {
    setShowSearchResults(searchResults.length > 0);
  }, [searchResults.length]);

  return {
    value: searchValue,
    searchResults,
    showSearchResults,
    gameState,
    handleChange,
    handleSearchSelect,
    handleInputFocus
  };
};

export const useSearchListItem = () => {
  const hardMode = useAppSelector((state) => getSetting(state, 'hardMode'));

  return { hardMode };
};
