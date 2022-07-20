import { Box, Flex, HStack, Heading } from '@chakra-ui/react';

import Settings from '../settings-modal';
import IntroModal from '../intro-modal';

const Navbar = () => {
  return (
    <Box p={2} borderBottom="solid 1px darkgrey" marginBottom={1} width="100%">
      <Flex maxWidth="600px" margin="0 auto">
        <HStack flex="1 1 0%" spacing={10}>
          <IntroModal />
        </HStack>
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
    </Box>
  );
};

export default Navbar;
