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
    border={`1px solid`}
    borderColor={`${type}Border`}
    boxShadow="0px 0px 4px 1px #000000b5;"
    width={20}
  >
    <Text textAlign="center" textTransform="capitalize" color="white">
      {type}
    </Text>
  </Box>
);

const MemoizedChip = memo(Chip);

export default MemoizedChip;
