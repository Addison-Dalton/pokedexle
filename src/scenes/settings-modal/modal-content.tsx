import {
  ModalBody,
  Switch,
  FormControl,
  VStack,
  Divider
} from '@chakra-ui/react';

import { useSettingModal } from './hooks';
import { SettingContainers, GenerationSlider } from './components';

const ModalContent = () => {
  const {
    colorMode,
    hardMode,
    toggleColorMode,
    toggleHardMode,
    handleGenerationChange
  } = useSettingModal();
  return (
    <ModalBody>
      <FormControl as={VStack} alignItems="start">
        {/* GENERATIONS */}
        <SettingContainers
          label="Generations"
          helperText="Choose which generations to play with."
          htmlFor="slider-root-generationSlider" // 'slider-root' set by chakra-ui
          flexDirection="column"
        >
          <GenerationSlider htmlId="generationSlider" onGenerationChange={handleGenerationChange} />
        </SettingContainers>
        <Divider />
        {/* HARD MODE */}
        <SettingContainers
          label="Hard mode"
          helperText="Only displays a Pokémon's name when searching."
          htmlFor="hardMode"
        >
          <Switch
            flex="1 1 0%"
            id="hardmode"
            isChecked={hardMode}
            onChange={toggleHardMode}
          />
        </SettingContainers>
        {/* DARK THEME - Removed for now. App defaults to dark theme. Might give light them for thought later. */}
        {/* <SettingContainers label="Dark theme" htmlFor="darkTheme">
          <Switch
            id="darktheme"
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
          />
        </SettingContainers> */}
      </FormControl>
    </ModalBody>
  );
};

export default ModalContent;
