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
    <Box margin="0 auto" marginBottom={4} minWidth={[340, 450]} paddingTop={5}>
      <Box position="relative">
        <InputGroup>
          <Input
            id="pokemon-search-input"
            type="search"
            role="combobox"
            dir="ltr"
            backgroundColor="white"
            _dark={{ backgroundColor: 'gray.800' }}
            placeholder="Search by name or type…"
            value={value}
            onChange={handleChange}
            onFocus={handleInputFocus}
            textTransform={value ? 'capitalize' : 'none'}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            disabled={disableInput}
            aria-controls="pokemon-search-results"
            aria-autocomplete="both"
            aria-owns="pokemon-search-results"
            aria-haspopup="true"
            aria-expanded={showSearchResults}
          />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>
        <SearchResultList
          list={searchResults}
          searchTerm={value}
          showResults={showSearchResults}
          onResultSelect={handleSearchSelect}
        />
      </Box>
    </Box>
  );
};

export default GameInput;
