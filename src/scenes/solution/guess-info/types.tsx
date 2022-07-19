import { FC, memo } from 'react';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import TypeChip from '../../../components/type-chips';
import { getTypeVariant } from '../../../services/game/utils';
import { getAllTypes } from '../../../services/pokedex/utils';

type Props = {
  solutionTypes: PokemonTypes[];
  guessedTypes: PokemonTypes[];
};

const StyledTypeChip = styled(TypeChip)`
  font-size: 0.8em;
`;

const Types: FC<Props> = ({ guessedTypes, solutionTypes }) => {
  const allTypes = getAllTypes();
  return (
    <Flex flexWrap="wrap" justifyContent="center" gap="0.5rem" marginBottom={6}>
      {allTypes.map((type, idx) => (
        <StyledTypeChip
          key={`${type}-${idx}`}
          type={type}
          variant={getTypeVariant(type, guessedTypes, solutionTypes)}
        />
      ))}
    </Flex>
  );
};

const memoizedTypes = memo(
  Types,
  (prevProps, nextProps) =>
    prevProps.guessedTypes.length === nextProps.guessedTypes.length
);

export default memoizedTypes;
