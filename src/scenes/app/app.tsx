import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

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
    <Box minHeight="100%" height="100%" display="flex" flexDirection="column">
      <Navbar />
      <Solution />
      <GameInput />
    </Box>
  );
};

export default App;
