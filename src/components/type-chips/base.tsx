import { FC, memo } from 'react';
import { Box, Text } from '@chakra-ui/react';

type Props = {
  type: PokemonTypes;
  className?: string;
};

const Chip: FC<Props> = ({ type, className }) => (
  <Box
    className={className}
    borderRadius="20px"
    backgroundColor={type}
    border={`2px solid`}
    borderColor={`${type}Border`}
    width="4rem"
    transition="all .3s ease-in-out"
  >
    <Text textAlign="center" textTransform="capitalize" color="white">
      {type}
    </Text>
  </Box>
);

const MemoizedChip = memo(Chip);

export default MemoizedChip;
