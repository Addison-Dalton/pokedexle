import { FC, useMemo } from 'react';
import styled from '@emotion/styled';
import { UnorderedList, Box } from '@chakra-ui/react';

import SearchListItem from './search-result-list-item';
import SearchResultCount from './search-result-count';

const SEARCH_LIMIT = 6;

type Props = {
  list: Pokemon[];
  showResults: boolean;
  searchTerm: string;
  onResultSelect: (value: Pokemon) => void;
};

const Wrapper = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: auto;
  bottom: 100%;
  width: 100%;
  border-color: inherit;
  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
`;

const SearchResultList: FC<Props> = ({
  list,
  showResults,
  searchTerm,
  onResultSelect
}) => {
  const limitedList = useMemo(() => list.slice(0, SEARCH_LIMIT), [list]);

  if (!showResults) return null;

  return (
    <Wrapper maxHeight={window.innerHeight - 100} zIndex={5}>
      <Box overflowY="auto" width="100%">
        <UnorderedList
          id="pokemon-search-results"
          overflowY="auto"
          spacing={1}
          listStyleType="none"
          marginInlineStart={0}
          backgroundColor="white"
          _dark={{ backgroundColor: 'gray.800' }}
        >
          {limitedList.map((pokemon) => (
            <SearchListItem
              key={pokemon.name}
              pokemon={pokemon}
              onSelect={onResultSelect}
            />
          ))}
        </UnorderedList>
      </Box>
      <SearchResultCount
        currentResultCount={limitedList.length}
        totalResultCount={list.length}
        searchTerm={searchTerm}
      />
    </Wrapper>
  );
};

export default SearchResultList;
