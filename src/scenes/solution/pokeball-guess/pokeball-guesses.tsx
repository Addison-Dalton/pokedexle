import { memo } from 'react';
import { Flex } from '@chakra-ui/react';
import PokeballGuess from '../../../components/pokeball-guess';
import { usePokeballGuesses } from '../hooks';

const PokeballGuesses = () => {
  const { guessedPokemon, MAX_GUESSES } = usePokeballGuesses();

  return (
    <Flex
      width="100%"
      padding-right={2}
      marginBottom={5}
      justifyContent="end"
      flexDirection="row-reverse"
    >
      {[...Array(MAX_GUESSES)].map((x, idx) => (
        <PokeballGuess key={`pokeball-${idx}`} guessedPokemon={guessedPokemon[idx]} />
      ))}
    </Flex>
  );
};

const memoizedPokeballGuesses = memo(PokeballGuesses);

export default memoizedPokeballGuesses;
