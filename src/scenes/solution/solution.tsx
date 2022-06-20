import { memo } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import PokeballGuesses from './pokeball-guess';
import SolutionGuessInfo from './guess-info';
import SolutionCorrectInfo from './solution-info';

const Solution = () => {
  return (
    <Box height="100%" marginRight={3} marginLeft={3}>
      <Flex
        maxWidth="500px"
        margin="0 auto"
        padding={2}
        flexDirection="column"
        alignItems="center"
        flexGrow={1}
      >
        <PokeballGuesses />
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
