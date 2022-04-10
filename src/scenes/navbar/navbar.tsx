import {
  Box,
  Flex,
  HStack,
  Heading,
} from '@chakra-ui/react';

import Settings from '../settings-modal';

const Navbar = () => {
  return (
    <Flex p={2} borderBottom="solid 1px darkgrey">
      <Box flex="1 1 0%">{'Empty space'}</Box>
      <Heading flex="1 1 0%" textAlign="center">{'Pokedexle'}</Heading>
      <HStack flex="1 1 0%" spacing={10} justifyContent="flex-end">
        <Settings />
      </HStack>
    </Flex>
  );
};

export default Navbar;
