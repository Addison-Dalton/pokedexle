import { useCallback, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { useAppSelector, useAppDispatch } from '../../../services/redux/hooks';
import { selectGameProgress, setGameProgress } from '../../../services/game/slice';
import { setLocalStorage } from '../../../services/local-storage';

export const useIntroModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const gameState = useAppSelector(selectGameProgress);

  useEffect(() => {
    if (gameState === 'intro') {
      onOpen();
    }
  }, [gameState, onOpen]);

  const handleClose = useCallback(() => {
    dispatch(setGameProgress('game'));
    setLocalStorage('hideIntro', true);
    onClose();
  }, [dispatch, onClose]);

  return {
    isOpen,
    handleOpen: onOpen,
    handleClose
  };
};
