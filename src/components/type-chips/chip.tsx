import { FC, memo } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import BaseChip from './base';

type Props = {
  type: PokemonTypes;
  variant?: TypeChipVariants;
  className?: string;
};

const StyledChip = styled(BaseChip)`
  &.solution {
    border-color: white;
    box-shadow: 0px 0px 6px 3px #000000b5;
  }

  &.eliminated {
    opacity: 0.3;
  }

  &.unguessed {
    opacity: 0.8;
  }
`;

const CrossOutOverlay = styled('div')`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: 12px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M100 0 L0 100 ' stroke='darkgray' stroke-width='5'/><path d='M0 0 L100 100 ' stroke='darkgray' stroke-width='5'/></svg>");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%, auto;
  transition: opacity 0.3s ease-in;

  &.eliminated {
    opacity: 1;
  }
`;

const Chip: FC<Props> = ({ type, variant = 'standard', className }) => (
  <Box position="relative">
    <CrossOutOverlay className={variant} />
    <StyledChip type={type} className={`${variant} ${className}`} />
  </Box>
);

const MemoizedChip = memo(Chip);

export default MemoizedChip;
