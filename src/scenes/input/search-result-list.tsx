import { FC } from 'react';
import styled from '@emotion/styled';
import { UnorderedList, Box } from '@chakra-ui/react';

import SearchListItem from './search-result-list-item';

type Props = {
  list: Pokemon[];
  onResultSelect: (value: Pokemon) => void;
};

const Wrapper = styled(Box)``;

const StyledList = styled(UnorderedList)`
  border-color: inherit;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
`;

const SearchResultList: FC<Props> = ({ list, onResultSelect }) => {
  if (list.length === 0) return null;

  return (
    <Wrapper>
      <StyledList spacing={1} listStyleType="none" marginInlineStart={0}>
        {list.map((pokemon) => (
          <SearchListItem key={pokemon.name} pokemon={pokemon} onSelect={onResultSelect} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default SearchResultList;
