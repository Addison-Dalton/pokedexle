import { memo } from 'react';
import styled from '@emotion/styled';

import PokemonSprite from '../../components/pokemon-sprite';
import PokemonMetrics from '../../components/pokemon-metrics';
import { useSolutionGuessInfo } from './hooks';
import Types from './types';

const INITIAL_BLUR = 18;
const BLUR_INTERVAL = 3;

type StyledProps = {
  imgBlur: number;
};

const SolutionSprite = styled(PokemonSprite)<StyledProps>`
  img {
    filter: ${(p) => `grayscale(1) blur(${p.imgBlur}px)`};
  }
`;

const SolutionGuessInfo = () => {
  const {
    gameProgress,
    solution,
    guessedTypes,
    heightRange,
    weightRange,
    genRange,
    numberOfGuesses
  } = useSolutionGuessInfo();

  if (gameProgress === 'end') return null;

  return (
    <>
      <SolutionSprite
        pokemon={solution}
        size={['15em', '20em']}
        imgBlur={INITIAL_BLUR - numberOfGuesses * BLUR_INTERVAL}
      />
      <PokemonMetrics height={heightRange} weight={weightRange} gen={genRange} />
      <Types guessedTypes={guessedTypes} solutionTypes={solution.types} />
    </>
  );
};

const memoizedSolutionGuessInfo = memo(SolutionGuessInfo);
export default memoizedSolutionGuessInfo;
