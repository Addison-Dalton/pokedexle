import { FC, useState, useCallback, memo } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 125);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  if (!guessedPokemon) return <PokeballIcon />;

  return (
    <Tooltip
      margin={2}
      isOpen={isOpen}
      hasArrow
      label={<TooltipContent guessedPokemon={guessedPokemon} />}
    >
      <StyledPokeballIcon
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
    </Tooltip>
  );
};

const memoizedPokeballGuess = memo(
  PokeballGuess,
  (prevProps, nextProps) =>
    prevProps.guessedPokemon === nextProps.guessedPokemon
);

export default memoizedPokeballGuess;
