import { extendTheme, type Theme, type ThemeOverride } from '@chakra-ui/react';

import styles from './styles';
import config from './config';

const overrides: ThemeOverride = {
  ...styles,
  config,
};

export default extendTheme(overrides) as Theme;
