import styled from '@emotion/styled';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';

import SearchResultList from './search-result-list';
import { useForm } from './hooks';

const SearchWrapper = styled(Box)``;

const GameInput = () => {
  const { value, searchResults, handleChange, handleSubmit, handleSearchSelect } =
    useForm();
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="search">
            {'Start typing to search for a Pokemon'}
          </FormLabel>
          <SearchWrapper>
            <InputGroup>
              <Input
                id="search"
                placeholder="Try searching for Pikachu…"
                value={value}
                onChange={handleChange}
                autoComplete="off"
              />
              <InputRightElement width='4.5rem'>
                <Button onClick={handleSubmit}>
                  {'Submit'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <SearchResultList list={searchResults} onResultSelect={handleSearchSelect} />
          </SearchWrapper>
        </FormControl>
      </form>
    </Box>
  );
};

export default GameInput;
