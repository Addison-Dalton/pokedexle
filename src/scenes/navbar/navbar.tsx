import {
  Box,
  Flex,
  IconButton,
  HStack,
  Heading,
  useColorMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex p={2} borderBottom="solid 1px darkgrey">
      <Box flex="1 1 0%">{'Empty space'}</Box>
      <Heading flex="1 1 0%" textAlign="center">{'Pokedexle'}</Heading>
      <HStack flex="1 1 0%" spacing={10} justifyContent="flex-end">
        <IconButton aria-label="color mode switch" onClick={toggleColorMode}>
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </IconButton>
      </HStack>
    </Flex>
  );
};

export default Navbar;
