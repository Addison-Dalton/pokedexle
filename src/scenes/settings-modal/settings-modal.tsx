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

import ModalBody from './modal-body'

const SettingsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton aria-label="settings" onClick={onOpen}>
        <SettingsIcon />
      </IconButton>
      <Modal onClose={onClose} size="md" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent paddingBottom={5}>
          <ModalHeader textAlign="center">{'SETTINGS'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody />
        </ModalContent>
      </Modal>
    </>
  );
};

export default SettingsModal;
