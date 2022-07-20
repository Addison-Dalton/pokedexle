import { Box, Flex, HStack, Heading } from '@chakra-ui/react';

import IntroModal from '../../components/modals/intro-modal';
import AboutModal from '../../components/modals/about-modal';
import StatsModal from '../../components/modals/stats-modal';
import SettingsModal from '../../components/modals/settings-modal';

const Navbar = () => {
  return (
    <Box p={2} borderBottom="solid 1px darkgrey" marginBottom={1} width="100%">
      <Flex maxWidth="600px" margin="0 auto">
        <HStack flex="1 1 0%" spacing={2}>
          <IntroModal />
          <AboutModal />
        </HStack>
        <Heading
          flex="1 1 0%"
          marginRight={2}
          marginLeft={2}
          textAlign="center"
          fontWeight={400}
          fontFamily="'Josefin Sans', sans-serif"
          letterSpacing={[0, '0.2rem']}
        >
          {'Pokédexle'}
        </Heading>
        <HStack flex="1 1 0%" spacing={2} justifyContent="flex-end">
          <StatsModal />
          <SettingsModal />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
