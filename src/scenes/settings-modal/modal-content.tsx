import {
  ModalBody,
  Switch,
  FormControl,
  FormLabel,
  VStack,
  FormHelperText,
  Flex,
  Box,
  Divider,
} from '@chakra-ui/react';

import { useSettingModal } from './hooks';

const ModalContent = () => {
  const { colorMode, hardMode, toggleColorMode, toggleHardMode } =
    useSettingModal();
  return (
    <ModalBody>
      <FormControl as={VStack} alignItems="start">
        {/* HARD MODE */}
        <Flex width="100%">
          <Box flex="1 1 0%">
            <FormLabel htmlFor="hardmode" marginBottom={0}>
              {'Hard mode'}
            </FormLabel>
            <FormHelperText marginTop={0} fontSize="xs">
              {"Only displays a pokemon's name when searching."}
            </FormHelperText>
          </Box>
          <Box justifyContent="flex-end">
            <Switch flex="1 1 0%" id="hardmode" isChecked={hardMode} onChange={toggleHardMode} />
          </Box>
        </Flex>
        <Divider />
        {/* DARK THEME */}
        <Flex width="100%">
          <Box flex="1 1 0%">
            <FormLabel htmlFor="darktheme">{'Dark theme'}</FormLabel>
          </Box>
          <Box justifyContent="flex-end">
            <Switch
              id="darktheme"
              isChecked={colorMode === 'dark'}
              onChange={toggleColorMode}
            />
          </Box>
        </Flex>
      </FormControl>
    </ModalBody>
  );
};

export default ModalContent;
