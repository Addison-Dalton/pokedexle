import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useColorMode } from '@chakra-ui/react';

import {
  getAllSettings,
  setLocalStorageSettings
} from '../../services/settings/slice';

export const useSettingModal = () => {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const { hardMode } = useSelector(getAllSettings);

  const toggleHardMode = useCallback(() => {
    dispatch(setLocalStorageSettings({ hardMode: !hardMode }));
  }, [hardMode, dispatch]);

  return {
    colorMode,
    hardMode,
    toggleColorMode,
    toggleHardMode
  }
};
