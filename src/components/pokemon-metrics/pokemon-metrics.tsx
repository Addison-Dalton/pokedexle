import { FC, memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

type Props = {
  height: string;
  weight: string;
  className?: string;
};

const PokemonMetrics: FC<Props> = ({ height, weight, className }) => (
  <Flex
    width="100%"
    justifyContent="space-evenly"
    marginTop={8}
    marginBottom={2}
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
  </Flex>
);

const memoizedPokemonMetrics = memo(PokemonMetrics);

export default memoizedPokemonMetrics;
