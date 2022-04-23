import {
  ModalBody,
  Flex,
  Text,
  Divider,
  Heading,
  OrderedList,
  ListItem
} from '@chakra-ui/react';

import { getPokemon } from '../../services/pokedex/utils';
import PokeballGuess from '../../components/pokeball-guess';

const ModalContent = () => {
  const pikachu = getPokemon(25);
  return (
    <ModalBody>
      <Flex maxWidth="500px" flexDirection="column" margin="1rem auto">
        <Text margin=".25rem 0">{'Guess the Pokémon in six tries!'}</Text>
        <Text margin=".25rem 0">
          {'With each guess, the Pokémon will become more defined!'}
        </Text>
        <Text margin=".25rem 0">
          {
            "Use the Pokémon's eliminated types, and height / weight ranges to help narrow your search."
          }
        </Text>
        <Divider marginTop={1} marginBottom={3} />
        <Heading size="md" margin=".25rem 0">
          {'Hints'}
        </Heading>
        <OrderedList marginTop={2}>
          <ListItem>
            <Text>
              {
                "As you guess, you'll slowly deplete in Poké balls. Hover over, or tap, them to see your previous guesses. Go ahead and try it!"
              }
            </Text>
            <Flex>
              <PokeballGuess guessedPokemon={undefined} />
              <PokeballGuess guessedPokemon={undefined} />
              <PokeballGuess guessedPokemon={pikachu} />
            </Flex>
          </ListItem>
        </OrderedList>
      </Flex>
    </ModalBody>
  );
};

export default ModalContent;
