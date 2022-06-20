import { memo } from 'react';
import styled from '@emotion/styled';

import { Flex, Heading, Text } from '@chakra-ui/react';

import PokemonSprite from '../../components/pokemon-sprite';
import PokemonMetrics from '../../components/pokemon-metrics';
import TypeChip from '../../components/type-chips';
import { getPlural } from '../../services/utils/string-utils';
import { useSolutionInfo } from './hooks';

const StyledPokemonMetrics = styled(PokemonMetrics)`
  max-width: 300px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledTypeChip = styled(TypeChip)`
  margin: 0.3rem !important;
  width: 4rem;
  font-size: 0.8em;
`;

const SolutionInfo = () => {
  const {
    gameProgress,
    gameSolved,
    solution,
    displayWeight,
    displayHeight,
    displayGen,
    numberOfGuesses
  } = useSolutionInfo();

  if (gameProgress !== 'end') return null;

  return (
    <>
      <PokemonSprite pokemon={solution} size={['15em', '20em']} />
      <Heading textTransform="capitalize">{solution.name}</Heading>
      <Flex justifyContent="center">
        {solution.types.map((type, idx) => (
          <StyledTypeChip key={`${type}-${idx}`} type={type} />
        ))}
      </Flex>
      <StyledPokemonMetrics height={displayHeight} weight={displayWeight} gen={displayGen} />
      {gameSolved ? (
        <Text fontSize="lg" fontWeight="bold">
          {'Nicely done! You guessed '}
          <Text as="span" textTransform="capitalize" fontStyle="italic">
            {solution.name}
          </Text>
          {` in ${numberOfGuesses} ${getPlural(
            numberOfGuesses,
            'guess',
            'guesses'
          )}.`}
        </Text>
      ) : (
        <Text fontSize="lg" fontWeight="bold">
          {"You didn't catch "}
          <Text as="span" textTransform="capitalize" fontStyle="italic">
            {solution.name}
          </Text>
          {'. Better luck next time!'}
        </Text>
      )}
      {/* TODO share button, stats? */}
    </>
  );
};

const memoizedSolutionInfo = memo(SolutionInfo);

export default memoizedSolutionInfo;
