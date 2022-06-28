import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import { getPlural } from '../../../services/utils/string-utils';

type Props = {
  gameSolved: boolean;
  pokemonName: string;
  numberOfGuesses: number;
};

const EndGameText: FC<Props> = ({
  gameSolved,
  pokemonName,
  numberOfGuesses
}) => {
  if (gameSolved) {
    return (
      <Text fontSize="lg" fontWeight="bold">
        {'Nicely done! You guessed '}
        <Text as="span" textTransform="capitalize" fontStyle="italic">
          {pokemonName}
        </Text>
        {` in ${numberOfGuesses} ${getPlural(
          numberOfGuesses,
          'guess',
          'guesses'
        )}.`}
      </Text>
    );
  }

  return (
    <Text fontSize="lg" fontWeight="bold">
      {"You didn't catch "}
      <Text as="span" textTransform="capitalize" fontStyle="italic">
        {pokemonName}
      </Text>
      {'. Better luck next time!'}
    </Text>
  );
};

export default EndGameText;
