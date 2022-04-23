import { memo } from 'react';
import styled from '@emotion/styled';
import { Flex, Box, Text } from '@chakra-ui/react';

import { ReactComponent as PokeballIcon } from '../../icons/pokeball.svg';
import PokemonSprite from '../../components/pokemon-sprite';
import Types from './types';

import { useSolution } from './hooks';

const INITIAL_BLUR = 35;
const BLUR_INTERVAL = 5;

type StyledSpriteProps = {
  imgBlur: number;
};

type StyledPokeballProps = {
  grayOut: boolean;
};

const SolutionSprite = styled(PokemonSprite)<StyledSpriteProps>`
  img {
    filter: ${(p) => `grayscale(1) blur(${p.imgBlur}px)`};
  }
`;

const StyledPokeballIcon = styled(PokeballIcon)<StyledPokeballProps>`
  filter: ${(p) => (p.grayOut ? 'grayscale(1)' : 'none')};
`;

const Solution = () => {
  const { solution, guessedTypes, numberOfGuesses, weightRange, heightRange } =
    useSolution();
  return (
    <Box height="100%" margin={3}>
      <Flex
        maxWidth="500px"
        margin="0 auto"
        flexDirection="column"
        alignItems="center"
        border="solid 2px"
        borderColor="yellow.400"
        borderRadius="6px"
        flexGrow={1}
      >
        <Flex width="100%" padding={2} justifyContent="end" flexDirection="row-reverse">
          {[...Array(6)].map((x, idx) => (
            <StyledPokeballIcon grayOut={idx < numberOfGuesses} />
          ))}
        </Flex>
        <SolutionSprite
          pokemon={solution}
          size={['15em', '20em']}
          imgBlur={INITIAL_BLUR - numberOfGuesses * BLUR_INTERVAL}
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
    </Box>
  );
};

const memoizedSolution = memo(Solution);

export default memoizedSolution;
