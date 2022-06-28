import { useCallback } from 'react';
import { Button } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { useAppDispatch } from '../../../services/redux/hooks';
import { resetGame } from '../../../services/game/slice';

const PlayAgainButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(resetGame());
  }, [dispatch]);

  return (
    <Button marginTop={4} leftIcon={<RepeatIcon />} onClick={handleClick}>
      {'Play again?'}
    </Button>
  );
};

export default PlayAgainButton;
