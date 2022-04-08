import { ChangeEvent, FormEvent, useState, useCallback, useMemo } from 'react';
import Fuse from 'fuse.js';

import { useAppDispatch } from '../../services/redux/hooks';
import { setGuess } from '../../services/game/slice';
import { getPokedex } from '../../services/pokedex/utils';

export const useForm = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>(undefined);
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
  const dispatch = useAppDispatch();
  const { pokemon } = getPokedex();
  const fuse = useMemo(() => new Fuse(pokemon, { keys: ['name'] }), [pokemon]);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (selectedPokemon) {
        console.log('submitted', searchValue);
        dispatch(setGuess(selectedPokemon));
      }
    },
    [searchValue, selectedPokemon, dispatch,]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value;
      setSearchValue(searchValue);

      const results = fuse
        .search(searchValue, { limit: 10 })
        .map((r) => r.item);
      setSearchResults(results);
    },
    [fuse]
  );

  const handleSearchSelect = useCallback((searchItem: Pokemon) => {
    setSearchValue(searchItem.name);
    setSelectedPokemon(searchItem);
    setSearchResults([]);
  }, [])

  return {
    value: searchValue,
    searchResults,
    handleSubmit,
    handleChange,
    handleSearchSelect,
  };
};
