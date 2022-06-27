import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

import { setSolutionPokemon } from '../../services/game/slice';
import { useAppDispatch } from '../../services/redux/hooks';
import { getRandomPokemon } from '../../services/pokedex/utils';

import Navbar from '../navbar';
import Solution from '../solution';
import GameInput from '../input';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSolutionPokemon(getRandomPokemon()));
  }, [dispatch]);

  return (
    <Flex minHeight="100%" height="100%" alignItems="center" flexDirection="column">
      <Navbar />
      <Flex
        height="100%"
        marginRight={3}
        marginLeft={3}
        maxWidth="500px"
        flexDirection="column"
      >
        <Solution />
        <GameInput />
      </Flex>
    </Flex>
  );
};

export default App;
