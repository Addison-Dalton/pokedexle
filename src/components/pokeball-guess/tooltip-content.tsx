import { FC, memo } from 'react';
import styled from '@emotion/styled';
import { Flex, Heading, Text } from '@chakra-ui/react';

import { convertHeight, convertWeight } from '../../services/pokedex/utils';
import PokemonSprite from '../pokemon-sprite';
import TypeChip from '../type-chips';

type Props = {
  guessedPokemon: Pokemon;
};

const StylePokemonSprite = styled(PokemonSprite)`
  margin: 0 auto;
`;

const StyledTypeChip = styled(TypeChip)`
  width: 3.5rem;
  font-size: 0.8em;
`;

const TooltipContent: FC<Props> = ({ guessedPokemon }) => {
  return (
    <Flex alignContent="center">
      <StylePokemonSprite pokemon={guessedPokemon} size={['4.25em']} />
      <Flex flexDirection="column" alignItems="start" gap=".1rem">
        <Heading size="sm" textTransform="capitalize" marginLeft="0.2rem">
          {guessedPokemon.name}
        </Heading>
        <Flex justifyContent="center" margin="0.2rem" gap={1}>
          {guessedPokemon.types.map((type, idx) => (
            <StyledTypeChip key={`${type}-${idx}`} type={type} />
          ))}
        </Flex>
        <Text textAlign="center" marginLeft="0.2rem">{`${convertHeight(
          guessedPokemon.height
        )}; ${convertWeight(guessedPokemon.weight)}`}</Text>
      </Flex>
    </Flex>
  );
};

const memoizedTooltipContent = memo(
  TooltipContent,
  (prevProps, nextProps) =>
    prevProps.guessedPokemon === nextProps.guessedPokemon
);

export default memoizedTooltipContent;
