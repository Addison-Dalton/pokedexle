import { Button } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { useGame } from '../../../services/game/hooks';

const PlayAgainButton = () => {
  const { setGame } = useGame();

  return (
    <Button marginTop={4} leftIcon={<RepeatIcon />} onClick={setGame}>
      {'Play again?'}
    </Button>
  );
};

export default PlayAgainButton;
