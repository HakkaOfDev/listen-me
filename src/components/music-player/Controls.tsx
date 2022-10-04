import { HStack, Icon, IconButton } from '@chakra-ui/react';
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from 'react-icons/bs';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <HStack spacing={4}>
    <IconButton
      icon={<BsArrowRepeat />}
      aria-label='Repeat music'
      size='sm'
      variant='ghost'
      colorScheme={repeat ? 'main' : 'gray'}
      onClick={() => setRepeat((prev) => !prev)}
    />
    {currentSongs?.length && (
      <IconButton
        icon={<MdSkipPrevious fontSize='1.4em' />}
        aria-label='Previous music'
        variant='ghost'
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <IconButton
        icon={<BsFillPauseFill fontSize='1.4em' />}
        aria-label='Pause music'
        variant='ghost'
        colorScheme='main'
        onClick={handlePlayPause}
      />
    ) : (
      <IconButton
        icon={<BsFillPlayFill fontSize='1.4em' />}
        aria-label='Play music'
        variant='ghost'
        onClick={handlePlayPause}
      />
    )}
    {currentSongs?.length && (
      <IconButton
        icon={<MdSkipNext fontSize='1.4em' />}
        aria-label='Next music'
        variant='ghost'
        onClick={handleNextSong}
      />
    )}
    <IconButton
      icon={<BsShuffle fontSize='1.4em' />}
      aria-label='Shuffle musics'
      size='sm'
      variant='ghost'
      colorScheme={shuffle ? 'main' : 'gray'}
      onClick={() => setShuffle((prev) => !prev)}
    />
  </HStack>
);

export default Controls;
