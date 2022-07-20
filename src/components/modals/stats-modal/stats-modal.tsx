import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Icon,
  Text
} from '@chakra-ui/react';
import { BiBarChart } from 'react-icons/bi';

const StatsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton aria-label="stats" onClick={onOpen}>
        <Icon as={BiBarChart} />
      </IconButton>
      <Modal onClose={onClose} size="sm" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent paddingBottom={5}>
          <ModalHeader textAlign="center">{'STATS'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {
                "Stats are a work in progress! Soon you'll be able to review all the Pokémon you have caught."
              }
            </Text>
            <br />
            <Text as="i" fontSize=".75em">
              {
                "I totally didn't add this before it was done just to balance the navbar. :)"
              }
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StatsModal;
