import { FC } from 'react';
import styled from '@emotion/styled';
import { UnorderedList, Box } from '@chakra-ui/react';

import SearchListItem from './search-result-list-item';

type Props = {
  list: Pokemon[];
  showResults: boolean;
  onResultSelect: (value: Pokemon) => void;
};

const Wrapper = styled(Box)`
  position: absolute;
  top: auto;
  bottom: 100%;
  width: 100%;
  border-color: inherit;
  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
`;

const SearchResultList: FC<Props> = ({ list, showResults, onResultSelect }) => {
  if (!showResults) return null;

  return (
    <Wrapper maxHeight={window.innerHeight - 100} overflowY="auto">
      <UnorderedList
        spacing={1}
        listStyleType="none"
        marginInlineStart={0}
        backgroundColor="white"
        _dark={{ backgroundColor: 'gray.800' }}
      >
        {list.map((pokemon) => (
          <SearchListItem
            key={pokemon.name}
            pokemon={pokemon}
            onSelect={onResultSelect}
          />
        ))}
      </UnorderedList>
    </Wrapper>
  );
};

export default SearchResultList;
