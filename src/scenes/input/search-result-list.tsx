import { FC, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { UnorderedList, Box } from '@chakra-ui/react';

import SearchListItem from './search-result-list-item';

type Props = {
  list: Pokemon[];
  onResultSelect: (value: Pokemon) => void;
};

const Wrapper = styled(Box)`
  border-color: inherit;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
`;

const SearchResultList: FC<Props> = ({ list, onResultSelect }) => {
  const [resultHeight, setResultHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      // 50 is arbitrary buffer
      setResultHeight(window.innerHeight - top - 50);
    }
  }, [ref, list]);
  if (list.length === 0) return null;

  return (
    <Wrapper ref={ref} maxHeight={`${resultHeight}px`} overflowY="auto">
      <UnorderedList spacing={1} listStyleType="none" marginInlineStart={0}>
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
