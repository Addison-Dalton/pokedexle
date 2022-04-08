import { useEffect } from 'react';
import { Text, Grid, Box, GridItem } from '@chakra-ui/react';

import { setSolutionPokemon } from '../../services/game/slice';
import { useAppDispatch } from '../../services/redux/hooks';
import { getRandomPokemon } from '../../services/pokedex/utils';

import GameInput from '../input';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSolutionPokemon(getRandomPokemon()))
  }, [dispatch]);

  return (
    <Box height="100%">
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={1}>
          <Text>{'Eventually some sidebar might go here'}</Text>
        </GridItem>
        <GridItem colSpan={3}>
          <GameInput />
        </GridItem>
        <GridItem colSpan={2}>
          <Text>{'Search guesses can go here'}</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default App;
