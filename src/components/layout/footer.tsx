import MusicPlayer from '@/components/music-player';
import { usePlayer } from '@/redux/features/playerSlice';
import { chakra } from '@chakra-ui/react';

const Footer = () => {
  const { activeSong } = usePlayer();

  return (
    activeSong?.title && (
      <chakra.footer
        w='full'
        bottom={0}
        zIndex='banner'
        pos='sticky'
        bg='white'
        _dark={{ bg: 'gray.900' }}
      >
        <MusicPlayer />
      </chakra.footer>
    )
  );
};

export default Footer;
