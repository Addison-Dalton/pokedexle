import { memo } from 'react';
import styled from '@emotion/styled';
import { Flex, Text } from '@chakra-ui/react';

import PokemonSprite from '../../components/pokemon-sprite';
import Types from './types';

import { useSolution } from './hooks';

const INITIAL_BLUR = 35;
const BLUR_INTERVAL = 5;

type StyledProps = {
  imgBlur: number;
};

const SolutionSprite = styled(PokemonSprite)<StyledProps>`
img {
  filter: ${(p) => `grayscale(1) blur(${p.imgBlur}px)`};
}
`;

const Solution = () => {
  const { solution, guessedTypes, numberOfGuesses, weightRange, heightRange } =
    useSolution();
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      border="solid 2px"
      borderColor="yellow.400"
      borderRadius="6px"
    >
      <SolutionSprite
        pokemon={solution}
        size="25rem"
        imgBlur={INITIAL_BLUR - (numberOfGuesses * BLUR_INTERVAL)}
      />
      <Flex
        width="100%"
        justifyContent="space-evenly"
        marginTop={8}
        marginBottom={2}
      >
        <Text textAlign="center">
          <Text as="span" fontWeight="bold">
            {'Height: '}
          </Text>
          {heightRange}
        </Text>
        <Text textAlign="center">
          <Text as="span" fontWeight="bold">
            {'Weight: '}
          </Text>
          {weightRange}
        </Text>
      </Flex>
      <Types guessedTypes={guessedTypes} solutionTypes={solution.types} />
    </Flex>
  );
};

const memoizedSolution = memo(Solution);

export default memoizedSolution;
