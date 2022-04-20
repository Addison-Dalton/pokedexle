import {
  Box,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import SearchResultList from './search-result-list';
import { useForm } from './hooks';

const GameInput = () => {
  const { value, searchResults, handleChange, handleSearchSelect } = useForm();
  return (
    <Box margin="0 auto" marginBottom={5} minWidth={['auto', 450]} paddingTop={5}>
      <Box position="relative">
        <InputGroup>
          <Input
            backgroundColor="white"
            _dark={{ backgroundColor: 'gray.800' }}
            placeholder="Search by name or type…"
            value={value}
            onChange={handleChange}
            textTransform={value ? 'capitalize' : 'none'}
            autoComplete="off"
          />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>
        <SearchResultList
          list={searchResults}
          onResultSelect={handleSearchSelect}
        />
      </Box>
    </Box>
  );
};

export default GameInput;
