import { FC, useState } from 'react';
import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text
} from '@chakra-ui/react';

import { useAppSelector } from '../../../../services/redux/hooks';
import { selectSettings } from '../../../../services/settings/selectors';
import { convertToRomanNumeral, pokemonGenerations } from '../../../../services/pokedex/utils';

type Props = {
  htmlId: string;
  onGenerationChange: (generations: [number, number]) => void;
};

export const GenerationSlider: FC<Props> = ({ htmlId, onGenerationChange }) => {
  const { generations } = useAppSelector((state) => selectSettings(state));
  const [displayGen, getDisplayGen] = useState<number[]>(
    // asserting number[] for two reasons. First is RangeSlider expects
    // a function with number[], and [number, number] is that. The
    // second is by type, generations can be undefined. But if it is,
    // the reducer will set it to a default value.
    generations as number[]
  );

  return (
    <Box marginTop={1} paddingRight={2} paddingLeft={2}>
      <RangeSlider
        id={htmlId}
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        aria-label={['min', 'max']}
        min={pokemonGenerations[0]}
        max={pokemonGenerations[1]}
        step={1}
        value={displayGen}
        onChange={getDisplayGen}
        onChangeEnd={onGenerationChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={5} index={0}>
          <Box>
            <Text fontSize="xs" color="gray.600">
              {convertToRomanNumeral(displayGen[0])}
            </Text>
          </Box>
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={5} index={1}>
          <Box>
            <Text fontSize="xs" color="gray.600">
              {convertToRomanNumeral(displayGen[1])}
            </Text>
          </Box>
        </RangeSliderThumb>
      </RangeSlider>
    </Box>
  );
};
