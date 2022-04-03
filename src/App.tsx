import { ChakraProvider } from '@chakra-ui/react'

import GameApp from './scenes/app';
import { getRandomPokemon } from './services/pokedex/utils';


function App() {
  return (
    <ChakraProvider>
      <GameApp />
    </ChakraProvider>
  );
}

export default App;
