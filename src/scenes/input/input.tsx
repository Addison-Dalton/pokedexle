import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import SearchResultList from './search-result-list';
import { useSearch } from './hooks';

const GameInput = () => {
  const {
    value,
    searchResults,
    showSearchResults,
    disableInput,
    handleChange,
    handleSearchSelect,
    handleInputFocus
  } = useSearch();
  return (
    <Box margin="0 auto" marginBottom={5} minWidth={[380, 450]} paddingTop={5}>
      <Box position="relative">
        <InputGroup>
          <Input
            id="pokemon-search-input"
            backgroundColor="white"
            _dark={{ backgroundColor: 'gray.800' }}
            placeholder="Search by name or type…"
            value={value}
            onChange={handleChange}
            onFocus={handleInputFocus}
            textTransform={value ? 'capitalize' : 'none'}
            autoComplete="off"
            disabled={disableInput}
          />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>
        <SearchResultList
          list={searchResults}
          showResults={showSearchResults}
          onResultSelect={handleSearchSelect}
        />
      </Box>
    </Box>
  );
};

export default GameInput;
