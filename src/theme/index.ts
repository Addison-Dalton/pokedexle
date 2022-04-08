import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

const overrides = {
  styles,
  components: {
    // TODO - component style overrides
  }
};

export default extendTheme(overrides);
