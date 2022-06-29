import { FC, useState, useMemo } from 'react';
import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text
} from '@chakra-ui/react';

import { useAppSelector } from '../../../services/redux/hooks';
import { selectSettings } from '../../../services/settings/selectors';
import { convertToRomanNumeral } from '../../../services/pokedex/utils';

type Props = {
  htmlId: string;
  onGenerationChange: (generations: [number, number]) => void;
};

const defaultGenerations = [1, 9];

export const GenerationSlider: FC<Props> = ({ htmlId, onGenerationChange }) => {
  const { generations: stateGen } = useAppSelector((state) =>
    selectSettings(state)
  );
  const generations = useMemo(() => stateGen || defaultGenerations, [stateGen]);
  const [displayGen, getDisplayGen] = useState<number[]>(generations);

  return (
    <Box paddingRight={1} paddingLeft={1}>
      <RangeSlider
        id={htmlId}
        // eslint-disable-next-line jsx-a11y/aria-proptypes
        aria-label={['min', 'max']}
        min={1}
        max={9}
        step={1}
        value={displayGen}
        onChange={getDisplayGen}
        onChangeEnd={onGenerationChange}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={4} index={0}>
          <Box>
            <Text fontSize="xs" color="gray.600">
              {convertToRomanNumeral(displayGen[0])}
            </Text>
          </Box>
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={4} index={1}>
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
