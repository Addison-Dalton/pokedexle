import { memo } from 'react';
import { Flex, Tooltip } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { ReactComponent as PokeballIcon } from '../../../icons/pokeball.svg';
import { usePokeballGuesses } from '../hooks';
import TooltipContent from './tooltip-content';

const StyledPokeballIcon = styled(PokeballIcon)`
  filter: grayscale(1);
`;

const PokeballGuesses = () => {
  const { guessedPokemon, MAX_GUESSES } = usePokeballGuesses();

  return (
    <Flex
      width="100%"
      padding-right={2}
      justifyContent="end"
      flexDirection="row-reverse"
    >
      {[...Array(MAX_GUESSES)].map((x, idx) => {
        if (idx < guessedPokemon.length) {
          return (
            <Tooltip
              hasArrow
              label={<TooltipContent guessedPokemon={guessedPokemon[idx]} />}
            >
              <StyledPokeballIcon />
            </Tooltip>
          );
        }

        return <PokeballIcon />;
      })}
    </Flex>
  );
};

const memoizedPokeballGuesses = memo(PokeballGuesses);

export default memoizedPokeballGuesses;
