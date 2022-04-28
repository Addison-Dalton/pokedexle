import { extendTheme, type Theme, type ThemeOverride } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import themeStyles from './styles';
import config from './config';

const overrides: ThemeOverride = {
  ...themeStyles,
  styles: {
    global: (props) => ({
      body: {
        bg: mode('blackAlpha.50', 'gray.800')(props)
      }
    })
  },
  components: {
    Button: {
      variants: {
        solid: (props) => ({
          bg: mode('gray.200', 'whiteAlpha.200')(props)
        })
      }
    },
  },
  config
};

export default extendTheme(overrides) as Theme;
