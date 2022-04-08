export const getRange = (
  solutionValue: number,
  guessRange: PokemonRange,
  guessValue: number
): PokemonRange => {
  let { min, max } = guessRange;
  // if they're the same, set min and max to the same value
  if (guessValue === solutionValue) {
    max = solutionValue;
    min = solutionValue;
  }

  // if the guess is larger than the solution then compare with the current max
  // if the new guess is smaller, use that
  if (guessValue > solutionValue) {
    max = getRangeValue(guessRange.max, guessValue, 'min');
  }

  // if the guess is smaller than the solution then compare with the current min
  // if the new guess is larger, us that.
  if (guessValue < solutionValue) {
    min = getRangeValue(guessRange.min, guessValue, 'max');
  }

  return {
    min,
    max
  };
};

export const getElimatedTypes = (
  solutionTypes: string[],
  guessTypes: string[],
  eliminatedTypes: string[]
) => {
  // filter out already eliminated types
  const filteredGuessTypes = guessTypes.filter(
    (type) => !eliminatedTypes.includes(type)
  );
  // filter out any types that match the solution type
  const incorrectGuessTypes = filteredGuessTypes.filter((type) => {
    return !solutionTypes.includes(type);
  });

  return [...eliminatedTypes, ...incorrectGuessTypes];
};

const getRangeValue = (
  previousGuessValue: number,
  guessValue: number,
  mathFunction: 'min' | 'max'
) => {
  // guessValues are initialized to 0
  if (previousGuessValue === 0) return guessValue;

  return Math[mathFunction](guessValue, previousGuessValue);
};
