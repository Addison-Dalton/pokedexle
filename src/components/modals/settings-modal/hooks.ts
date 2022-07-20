import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useColorMode } from '@chakra-ui/react';

import {
  selectSettings,
  setLocalStorageSettings
} from '../../../services/settings/slice';

export const useSettingModal = () => {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const { hardMode } = useSelector(selectSettings);

  const toggleHardMode = useCallback(() => {
    dispatch(setLocalStorageSettings({ hardMode: !hardMode }));
  }, [hardMode, dispatch]);

  const handleGenerationChange = useCallback((generations: [number, number]) => {
    dispatch(setLocalStorageSettings({ generations }));
  }, [dispatch]);

  return {
    colorMode,
    hardMode,
    toggleColorMode,
    toggleHardMode,
    handleGenerationChange
  };
};
