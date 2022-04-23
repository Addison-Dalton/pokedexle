export const getPlural = (count: number, singular: string, plural: string) => {
  if (count === 0 || count > 1) return plural;
  return singular;
}