import { FC } from 'react';
import { Box, Text, CSSObject } from '@chakra-ui/react';

type Props = {
  currentResultCount: number;
  totalResultCount: number;
  searchTerm: string;
};

const boxDarkStyles: CSSObject = {
  background: 'gray.600'
};

const textDarkStyles: CSSObject = {
  color: 'gray.400'
};

const SearchResultsCount: FC<Props> = ({
  currentResultCount,
  totalResultCount,
  searchTerm
}) => (
  <Box
    width="100%"
    paddingRight={2}
    paddingLeft={2}
    backgroundColor="gray.100"
    borderTop="solid 1px"
    borderColor="inherit"
    _dark={boxDarkStyles}
  >
    <Text
      fontSize="xs"
      color="gray.500"
      _dark={textDarkStyles}
    >{`Showing ${currentResultCount} of ${totalResultCount} Pokémon for "${searchTerm}"`}</Text>
  </Box>
);

export default SearchResultsCount;
