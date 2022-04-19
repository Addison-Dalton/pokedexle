import styled from '@emotion/styled';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import SearchResultList from './search-result-list';
import { useForm } from './hooks';

const SearchWrapper = styled(Box)``;

const GameInput = () => {
  const { value, searchResults, handleChange, handleSearchSelect } = useForm();
  return (
    <Box margin="0 auto" paddingTop={5}>
      <FormControl>
        <FormLabel htmlFor="search">
          {'Start typing to search for a Pokemon'}
        </FormLabel>
        <SearchWrapper>
          <InputGroup>
            <Input
              id="search"
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
        </SearchWrapper>
      </FormControl>
    </Box>
  );
};

export default GameInput;
