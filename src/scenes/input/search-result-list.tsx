import { FC } from 'react';
import styled from '@emotion/styled';
import { UnorderedList, ListItem, Box, Button } from '@chakra-ui/react';

type Props = {
  list: Pokemon[];
  onResultSelect: (value: Pokemon) => void;
};

const Wrapper = styled(Box)``;

const SearchResultList: FC<Props> = ({ list, onResultSelect }) => {
  if (list.length === 0) return null;

  return (
    <Wrapper>
      <UnorderedList spacing={1} listStyleType="none">
        {list.map((item) => (
          <ListItem key={item.name}>
            <Button onClick={() => onResultSelect(item)}>{item.name}</Button>
          </ListItem>
        ))}
      </UnorderedList>
    </Wrapper>
  );
};

export default SearchResultList;
