import {
  IconButton,
  useColorMode,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { BsMoon } from 'react-icons/bs';
import { WiDaySunny } from 'react-icons/wi';

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label='Toggle color mode'
      key={mode('light', 'dark')}
      variant='ghost'
      colorScheme={mode('purple', 'orange')}
      icon={mode(<BsMoon />, <WiDaySunny />)}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeButton;
