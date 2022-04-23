import { Box, Flex, HStack, Heading } from '@chakra-ui/react';

import Settings from '../settings-modal';

const Navbar = () => {
  return (
    <Flex p={2} borderBottom="solid 1px darkgrey" marginBottom={5}>
      <Box flex="1 1 0%">{'Empty space'}</Box>
      <Heading
        flex="1 1 0%"
        textAlign="center"
        fontWeight={400}
        fontFamily="'Josefin Sans', sans-serif"
        letterSpacing="0.2rem"
      >
        {'Pokédexle'}
      </Heading>
      <HStack flex="1 1 0%" spacing={10} justifyContent="flex-end">
        <Settings />
      </HStack>
    </Flex>
  );
};

export default Navbar;
