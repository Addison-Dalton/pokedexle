import { FC, useCallback } from 'react';
import styled from '@emotion/styled';
import {
  Box,
  Flex,
  ListItem,
  Heading,
  Text,
  HStack,
  CSSObject
} from '@chakra-ui/react';

import {
  convertHeight,
  convertWeight,
  convertToRomanNumeral
} from '../../services/pokedex/utils';
import TypeChip from '../../components/type-chips';
import PokemonSprite from '../../components/pokemon-sprite';
import { useSearchListItem } from './hooks';

type Props = {
  pokemon: Pokemon;
  onSelect: (value: Pokemon) => void;
};

const listItemDarkStyles: CSSObject = {
  backgroundColor: 'gray.600',
  _hover: { backgroundColor: 'gray.700' }
};

const StyledTypeChip = styled(TypeChip)`
  margin: 0.3rem !important;
  width: 4rem;
  font-size: 0.7em;
`;

const SearchListItem: FC<Props> = ({ pokemon, onSelect }) => {
  const { hardMode } = useSearchListItem();
  const { name, types, height, weight, generation } = pokemon;

  const handleSelect = useCallback(
    () => onSelect(pokemon),
    [pokemon, onSelect]
  );
  return (
    <ListItem
      width="100%"
      padding={3}
      cursor="pointer"
      backgroundColor="gray.100"
      _dark={listItemDarkStyles}
      _hover={{ backgroundColor: 'gray.200' }}
      onClick={handleSelect}
    >
      {hardMode ? (
        <Heading
          as="h4"
          size="sm"
          textAlign="center"
          textTransform="capitalize"
        >
          {name}
        </Heading>
      ) : (
        <Flex alignItems="center" position="relative">
          <PokemonSprite pokemon={pokemon} size="80px" />
          <Box flexGrow={1} marginLeft={6}>
            <Heading
              as="h4"
              size="sm"
              textAlign="left"
              textTransform="capitalize"
            >
              {name}
            </Heading>
            <HStack justifyContent="left" marginTop={2} marginBottom={2}>
              {types.map((type) => (
                <StyledTypeChip key={type} type={type} />
              ))}
            </HStack>
            <HStack justifyContent="left" spacing={5}>
              <Text textAlign="center" fontSize="sm">
                <Text as="span" fontWeight="bold">
                  {'Height: '}
                </Text>
                {convertHeight(height)}
              </Text>
              <Text textAlign="center" fontSize="sm">
                <Text as="span" fontWeight="bold">
                  {'Weight: '}
                </Text>
                {convertWeight(weight)}
              </Text>
            </HStack>
            <Text
              position="absolute"
              top={0}
              right={0}
              textAlign="left"
              as="span"
              fontSize="sm"
            >
              {`Gen. ${convertToRomanNumeral(generation)}`}
            </Text>
          </Box>
        </Flex>
      )}
    </ListItem>
  );
};

export default SearchListItem;
