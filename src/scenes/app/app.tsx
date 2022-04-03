import { Text, Grid, Box, GridItem } from '@chakra-ui/react';

import GameInput from '../input';

const App = () => {
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
