import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  IconButton,
  Text,
  Link,
  useDisclosure
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

const AboutModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton aria-label="info" onClick={onOpen}>
        <InfoIcon />
      </IconButton>
      <Modal isOpen={isOpen} size="sm" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{'ABOUT'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom={5}>
            <Text>
              {'Pokédexle is a Pokémon guessing game, inspired by '}
              <Link
                color="teal.500"
                href="https://www.nytimes.com/games/wordle/index.html"
              >
                {'Wordle'}
              </Link>
              {', '}
              <Link color="teal.500" href="https://www.spotify.com/heardle/">
                {'Heardle'}
              </Link>
              {', and similar games. '}
            </Text>
            <br />
            <Text>
              {"You've got six attempts to catch the Pokémon. Good luck!"}
            </Text>
            <br />
            <Text>
              <Text textDecoration="underline" as="span">
                {'Created by '}
                <Link color="teal.500" href="https://github.com/Addison-Dalton">
                  {'Addison Dalton.'}
                </Link>
              </Text>
              {' Special thanks to '}
              <Link color="teal.500" href="https://pokeapi.co/">
                {'PokéApi'}
              </Link>
              {' for supplying all the Pokémon data and sprites.'}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutModal;
