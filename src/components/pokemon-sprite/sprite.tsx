// sprites served from: https://github.com/PokeAPI/sprites
import { FC, memo } from 'react';
import { Box, Image, SkeletonCircle } from '@chakra-ui/react';

import { getPokemonSpriteUrl } from '../../services/game/utils';

type Props = {
  pokemon: Pokemon;
  size: string | string[];
  className?: string;
};

const Sprite: FC<Props> = ({ pokemon, size = 'sm', className }) => {
  const { id, name } = pokemon;
  return (
    <Box className={className} boxSize={size}>
      <Image
        src={getPokemonSpriteUrl(id)}
        alt={name}
        fallback={<SkeletonCircle w={size} h={size} margin="0 auto" />}
      />
    </Box>
  );
};

const MemoizedSprite = memo(
  Sprite,
  (prevProps, nextProps) =>
    prevProps.pokemon.id === nextProps.pokemon.id &&
    prevProps.pokemon.name === nextProps.pokemon.name &&
    prevProps.size === nextProps.size &&
    prevProps.className === nextProps.className
);

export default MemoizedSprite;
