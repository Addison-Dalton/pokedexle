import { FC, memo } from 'react';
import { Tooltip } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { ReactComponent as PokeballIcon } from '../../icons/pokeball.svg';
import TooltipContent from './tooltip-content';

type Props = {
  guessedPokemon?: Pokemon;
};

const StyledPokeballIcon = styled(PokeballIcon)`
  filter: grayscale(1);
`;

const PokeballGuess: FC<Props> = ({ guessedPokemon }) => {
  if (!guessedPokemon) return <PokeballIcon />;

  return (
    <Tooltip
      hasArrow
      label={<TooltipContent guessedPokemon={guessedPokemon} />}
    >
      <StyledPokeballIcon />
    </Tooltip>
  );
};

const memoizedPokeballGuess = memo(
  PokeballGuess,
  (prevProps, nextProps) =>
    prevProps.guessedPokemon === nextProps.guessedPokemon
);

export default memoizedPokeballGuess;

