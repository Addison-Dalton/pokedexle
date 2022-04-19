import { useEffect } from 'react';
import { Grid, Box, GridItem } from '@chakra-ui/react';

import { setSolutionPokemon } from '../../services/game/slice';
import { useAppDispatch } from '../../services/redux/hooks';
import { getRandomPokemon } from '../../services/pokedex/utils';

import Navbar from '../navbar';
import Solution from '../solution';
import GameInput from '../input';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSolutionPokemon(getRandomPokemon()))
  }, [dispatch]);

  return (
    <Box height="100%">
      <Grid templateColumns="repeat(6, 1fr)" paddingTop={0}>
        <GridItem colSpan={6}>
          <Navbar />
        </GridItem>
        <GridItem padding={10} colSpan={6}>
          <Box maxWidth="500px" margin="0 auto">
            <Solution />
            <GameInput />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default App;
