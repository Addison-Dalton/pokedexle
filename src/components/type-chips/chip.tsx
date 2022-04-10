import { FC, memo } from 'react';
import { Box, Text } from '@chakra-ui/react';

type Props = {
  type: PokemonTypes;
};

const Chip: FC<Props> = ({ type }) => (
  <Box
    borderRadius="20px"
    backgroundColor={type}
    border={`1px solid`}
    borderColor={`${type}Border`}
    width={20}
  >
    <Text textAlign="center" textTransform="capitalize" color="white">
      {type}
    </Text>
  </Box>
);

const MemoizedChip = memo(Chip);

export default MemoizedChip;
