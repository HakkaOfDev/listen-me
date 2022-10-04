import PlayPause from '@/components/PlayPause';
import { playPause, setActiveSong } from '@/redux/features/playerSlice';
import {
  AspectRatio,
  Box,
  BoxProps,
  Divider,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useDispatch } from 'react-redux';

const variants: Variants = {
  rest: {
    opacity: 0,
    transition: { ease: 'easeOut', duration: 0.2, type: 'tween' },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const MotionBox = motion<BoxProps>(Box);

const SongCard = ({
  song,
  isPlaying,
  activeSong,
  i,
  data,
  isPlayable = true,
}) => {
  const { key, title, images, artists, subtitle } = song;
  const dispacth = useDispatch();

  const handlePlay = () => {
    dispacth(setActiveSong({ song, data, i }));
    dispacth(playPause(true));
  };

  const handlePause = () => {
    dispacth(playPause(false));
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <VStack
      w='full'
      bg='main.50'
      _dark={{
        bg: 'gray.600',
      }}
    >
      {isPlayable ? (
        isMobile ? (
          <Box w='full' pos='relative'>
            {' '}
            <AspectRatio w='full' ratio={1}>
              <Image src={images?.coverart} alt='Cover art' />
            </AspectRatio>{' '}
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePause}
              handlePlay={handlePlay}
              pos='absolute'
              bottom='2'
              right='2'
              size='md'
            />
          </Box>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotionBox
              w='full'
              pos='relative'
              initial='rest'
              animate='rest'
              whileHover={isPlayable ? 'hover' : undefined}
            >
              <AspectRatio w='full' ratio={1}>
                <Image src={images?.coverart} alt='Cover art' />
              </AspectRatio>
              <MotionBox
                pos='absolute'
                bottom='2'
                right='2'
                variants={variants}
              >
                <PlayPause
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  song={song}
                  handlePause={handlePause}
                  handlePlay={handlePlay}
                />
              </MotionBox>
            </MotionBox>
          </AnimatePresence>
        )
      ) : (
        <Box w='full'>
          <AspectRatio w='full' ratio={1}>
            <Image src={images?.coverart} alt='Cover art' />
          </AspectRatio>
        </Box>
      )}
      <VStack w='full' p={1}>
        <Heading
          textAlign='center'
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
        >
          {title}
        </Heading>
        <Divider />
        <Text textAlign='center'>{subtitle}</Text>
      </VStack>
    </VStack>
  );
};

export default SongCard;
