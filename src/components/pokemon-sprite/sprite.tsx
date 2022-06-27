// sprites served from: https://github.com/PokeAPI/sprites
import { FC, memo } from 'react';
import { Box, Image, SkeletonCircle } from '@chakra-ui/react';

import { getPokemonSpriteUrl } from '../../services/game/utils';

type Props = {
  pokemon: Pokemon;
  size: string | string[];
  className?: string;
  overlayImage?: boolean;
};

const Sprite: FC<Props> = ({
  pokemon,
  size = 'sm',
  className,
  overlayImage
}) => {
  const { id, name } = pokemon;
  return (
    <Box className={className} boxSize={size} position="relative">
      <Image
        src={getPokemonSpriteUrl(id)}
        alt={name}
        fallback={<SkeletonCircle w={size} h={size} margin="0 auto" />}
      />
      {/* image overlay */}
      {overlayImage && (
        <Box position="absolute" top="0" left="0" boxSize={size} />
      )}
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
