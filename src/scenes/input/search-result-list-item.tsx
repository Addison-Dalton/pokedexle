import { FC, useCallback } from 'react';
import {
  Box,
  Flex,
  ListItem,
  Heading,
  Text,
  HStack,
  CSSObject
} from '@chakra-ui/react';

import { convertHeight, convertWeight } from '../../services/pokedex/utils';
import TypeChip from '../../components/type-chips';
import PokemonSprite from '../../components/pokemon-sprite';
import { useSearchListItem } from './hooks';

type Props = {
  pokemon: Pokemon;
  onSelect: (value: Pokemon) => void;
};

const listItemDarkStyles: CSSObject = {
  backgroundColor: 'whiteAlpha.200',
  _hover: { backgroundColor: 'whiteAlpha.300' }
};

const SearchListItem: FC<Props> = ({ pokemon, onSelect }) => {
  const { hardMode } = useSearchListItem();
  const { name, types, height, weight } = pokemon;

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
          size="md"
          textAlign="center"
          textTransform="capitalize"
        >
          {name}
        </Heading>
      ) : (
        <Flex alignItems="center">
          <PokemonSprite pokemon={pokemon} size="80px" />
          <Box flexGrow={1} marginLeft={6}>
            <Heading
              as="h4"
              size="md"
              textAlign="left"
              textTransform="capitalize"
            >
              {name}
            </Heading>
            <HStack justifyContent="left" marginTop={2} marginBottom={2}>
              {types.map((type) => (
                <TypeChip key={type} type={type} />
              ))}
            </HStack>
            <HStack justifyContent="left" spacing={5}>
              <Text textAlign="center">
                <Text as="span" fontWeight="bold">
                  {'Height: '}
                </Text>
                {convertHeight(height)}
              </Text>
              <Text textAlign="center">
                <Text as="span" fontWeight="bold">
                  {'Weight: '}
                </Text>
                {convertWeight(weight)}
              </Text>
            </HStack>
          </Box>
        </Flex>
      )}
    </ListItem>
  );
};

export default SearchListItem;
