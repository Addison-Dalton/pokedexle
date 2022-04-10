// sprites served from: https://github.com/PokeAPI/sprites
import { FC, memo } from 'react';
import { Box, Image, SkeletonCircle } from '@chakra-ui/react';

import { getPokemonSpriteUrl } from '../../services/pokedex/utils';

type Props = {
  pokemon: Pokemon;
  size: string;
};

const Sprite: FC<Props> = ({ pokemon, size = 'sm' }) => {
  const { id, name } = pokemon;
  return (
    <Box boxSize={size}>
      <Image src={getPokemonSpriteUrl(id)} alt={name} fallback={<SkeletonCircle size={size} />} />
    </Box>
  );
};

const MemoizedSprite = memo(
  Sprite,
  (prevProps, nextProps) =>
    prevProps.pokemon.id === nextProps.pokemon.id &&
    prevProps.pokemon.name === nextProps.pokemon.name &&
    prevProps.size === nextProps.size
);

export default MemoizedSprite;
