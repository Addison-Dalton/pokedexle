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
import ModalBody from './modal-content';

const IntroModal = () => {
  const { isOpen, handleOpen, handleClose } = useIntroModal();

  return (
    <>
      <IconButton aria-label="instructions" onClick={handleOpen}>
        <QuestionIcon />
      </IconButton>
      <Modal onClose={handleClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent paddingBottom={5}>
          <ModalHeader textAlign="center">{'HOW TO PLAY'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody onClose={handleClose} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default IntroModal;
