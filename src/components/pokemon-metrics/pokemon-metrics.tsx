import { FC, memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

type Props = {
  height: string;
  weight: string;
  gen: string;
  className?: string;
};

const PokemonMetrics: FC<Props> = ({ height, weight, gen, className }) => (
  <Flex
    width="100%"
    flexWrap="wrap"
    justifyContent="space-evenly"
    marginTop={8}
    marginBottom={2}
    gap={2}
    className={className}
  >
    <Text textAlign="center">
      <Text as="span" fontWeight="bold">
        {'Height: '}
      </Text>
      {height}
    </Text>
    <Text textAlign="center">
      <Text as="span" fontWeight="bold">
        {'Weight: '}
      </Text>
      {weight}
    </Text>
    <Text textAlign="center">
      <Text as="span" fontWeight="bold">
        {'Gen: '}
      </Text>
      {gen}
    </Text>
  </Flex>
);

const memoizedPokemonMetrics = memo(PokemonMetrics);

export default memoizedPokemonMetrics;
