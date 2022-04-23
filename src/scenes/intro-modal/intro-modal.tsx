import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  IconButton
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

import { useIntroModal } from './hooks';

const IntroModal = () => {
  const { isOpen, handleOpen, handleClose } = useIntroModal();

  return (
    <>
      <IconButton aria-label="instructions" onClick={handleOpen}>
        <QuestionIcon />
      </IconButton>
      <Modal onClose={handleClose} size="sm" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent paddingBottom={5} marginLeft={2} marginRight={2}>
          <ModalHeader textAlign="center">{'HOW TO PLAY'}</ModalHeader>
          <ModalCloseButton />
          <p>{'Eventually introduction instructions will go here'}</p>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IntroModal;
