import { FC, memo } from 'react';
import styled from '@emotion/styled';
import BaseChip from './base';

type Props = {
  type: PokemonTypes;
  variant?: TypeChipVariants;
  className?: string;
};

const EliminatedChip = styled(BaseChip)`
  background-color: gray;
  border-color: darkgray;
  opacity: 0.5;
  text-decoration: line-through;
  box-shadow: 0px 0px 2px 3px #ff1100;
`;

const SolutionChip = styled(BaseChip)`
  box-shadow: 0px 0px 2px 3px #3de129;
`

const Chip: FC<Props> = ({ type, variant = 'standard', className }) => {
  switch (variant) {
    case 'standard':
      return <BaseChip type={type} className={className} />
    case 'eliminated':
      return <EliminatedChip type={type} className={className} />
    case 'solution':
      return <SolutionChip type={type} className={className} />
    default:
      return <BaseChip type={type} className={className} />
  }
};

const MemoizedChip = memo(Chip);

export default MemoizedChip;
