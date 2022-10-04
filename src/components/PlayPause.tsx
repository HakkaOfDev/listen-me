import { IconButton } from '@chakra-ui/react';
import { FaPause, FaPlay } from 'react-icons/fa';

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
  ...props
}) => {
  return isPlaying && activeSong?.title === song.title ? (
    <IconButton
      aria-label='Pause'
      rounded='full'
      icon={<FaPause />}
      colorScheme='main'
      onClick={handlePause}
      size='lg'
      {...props}
    />
  ) : (
    <IconButton
      aria-label='Play'
      rounded='full'
      icon={<FaPlay />}
      colorScheme='main'
      onClick={handlePlay}
      size='lg'
      {...props}
    />
  );
};

export default PlayPause;
