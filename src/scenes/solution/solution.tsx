import { memo } from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';

import { ReactComponent as PokeballIcon } from '../../icons/pokeball.svg';
import SolutionGuessInfo from './guess-info';
import SolutionCorrectInfo from './solution-info';

import { useSolution } from './hooks';

type StyledProps = {
  grayOut: boolean;
};

const StyledPokeballIcon = styled(PokeballIcon)<StyledProps>`
  filter: ${(p) => (p.grayOut ? 'grayscale(1)' : 'none')};
`;

const Solution = () => {
  const { numberOfGuesses } = useSolution();
  return (
    <Box height="100%" margin={3}>
      <Flex
        maxWidth="500px"
        margin="0 auto"
        padding={2}
        flexDirection="column"
        alignItems="center"
        border="solid 2px"
        borderColor="yellow.400"
        borderRadius="6px"
        flexGrow={1}
      >
        <Flex
          width="100%"
          padding-right={2}
          justifyContent="end"
          flexDirection="row-reverse"
        >
          {[...Array(6)].map((x, idx) => (
            <StyledPokeballIcon grayOut={idx < numberOfGuesses} />
          ))}
        </Flex>
        {/* GuessInfo will render initially, and until the gameProgress "ends"
            After which CorrectInfo will render, and show the solution results
        */}
        <SolutionGuessInfo />
        <SolutionCorrectInfo />
      </Flex>
    </Box>
  );
};

const memoizedSolution = memo(Solution);

export default memoizedSolution;
