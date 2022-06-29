import { FC, useState } from 'react';
import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text
} from '@chakra-ui/react';

import { convertToRomanNumeral } from '../../../services/pokedex/utils';

type Props = {
  htmlId: string;
};

const defaultGeneration = [1, 9];

export const GenerationSlider: FC<Props> = ({ htmlId }) => {
  const [generations, setGenerations] = useState<number[]>(defaultGeneration);

  return (
    <Box paddingRight={1} paddingLeft={1}>
      <RangeSlider
        id={htmlId}
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        aria-label={['min', 'max']}
        min={1}
        max={9}
        step={1}
        defaultValue={[1, 9]}
        onChange={setGenerations}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={4} index={0}>
          <Box>
            <Text fontSize="xs" color="gray.600">
              {convertToRomanNumeral(generations[0])}
            </Text>
          </Box>
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={4} index={1}>
          <Box>
            <Text fontSize="xs" color="gray.600">
              {convertToRomanNumeral(generations[1])}
            </Text>
          </Box>
        </RangeSliderThumb>
      </RangeSlider>
    </Box>
  );
};
