import { FC, useState, useCallback } from 'react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ReactComponent as PokeballIcon } from '../../icons/pokeball.svg';

// play button size
const PLAY_BUTTON_WIDTH = 100;
const PLAY_BUTTON_HEIGHT = 100;

// animation times
const BOUNCE_DURATION = 600;
const SPIN_DURATION = 800;
const MOVE_DURATION = 1000;

type Props = {
  onClose: VoidFunction;
};
type StyledProps = {
  moveAnimation: boolean;
};

const StyledButton = styled('button')<StyledProps>`
  position: absolute;
  /* center in container, minus the width of pokeball */
  left: calc(50% - ${PLAY_BUTTON_WIDTH / 2}px);
  top: calc(50% - ${PLAY_BUTTON_HEIGHT / 2}px);
  align-self: center;

  transition: all 1s ease;

  ${(p) =>
    p.moveAnimation &&
    css`
      animation: bounce ${BOUNCE_DURATION}ms ease 0ms 1,
        spin ${SPIN_DURATION}ms linear ${BOUNCE_DURATION}ms infinite,
        moveLeftRight ${MOVE_DURATION}ms linear ${BOUNCE_DURATION}ms 1 forwards;
    `}

  @keyframes bounce {
    0% {
      top: calc(50% - ${PLAY_BUTTON_HEIGHT / 2}px);
    }
    10% {
      top: calc(50% - ${PLAY_BUTTON_HEIGHT / 2 + 15}px);
    }
    50% {
      top: calc(50% - ${PLAY_BUTTON_HEIGHT / 2 - 5}px);
    }
    100% {
      top: calc(50% - ${PLAY_BUTTON_HEIGHT / 2}px);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes moveLeftRight {
    0% {
      left: calc(50% - ${PLAY_BUTTON_WIDTH / 2}px);
    }
    100% {
      left: calc(100% + ${PLAY_BUTTON_WIDTH}px);
    }
  }
`;

const PlayButton: FC<Props> = ({ onClose }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  const startGame = useCallback(() => {
    // ending number to just add some buffer
    const startGameDelay = BOUNCE_DURATION + MOVE_DURATION - 50;

    setStartAnimation(true);
    setTimeout(() => {
      onClose();
    }, startGameDelay);
  }, [onClose]);
  return (
    <Box
      height={PLAY_BUTTON_HEIGHT + 20}
      width="100%"
      position="relative"
      alignSelf="center"
      overflow="hidden"
    >
      <StyledButton
        onClick={startGame}
        moveAnimation={startAnimation}
      >
        <PokeballIcon height={PLAY_BUTTON_HEIGHT} width={PLAY_BUTTON_WIDTH} />
      </StyledButton>
    </Box>
  );
};

export default PlayButton;
