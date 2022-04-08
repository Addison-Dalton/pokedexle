import { ChakraProvider } from '@chakra-ui/react'
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './store';
import GameApp from './scenes/app';
import { theme } from './theme';


function App() {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <GameApp />
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default App;
