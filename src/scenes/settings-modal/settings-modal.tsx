import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  IconButton
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

import ModalBody from './modal-content';

const SettingsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton aria-label="settings" onClick={onOpen}>
        <SettingsIcon />
      </IconButton>
      <Modal onClose={onClose} size={'sm'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent paddingBottom={5} marginLeft={2} marginRight={2}>
          <ModalHeader textAlign="center">{'SETTINGS'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody />
        </ModalContent>
      </Modal>
    </>
  );
};

export default SettingsModal;
