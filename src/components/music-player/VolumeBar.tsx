import {
  HStack,
  Icon,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import React from 'react';
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs';

const VolumeBar = ({ value, min, max, onChange, setVolume }) => {
  return (
    <HStack
      flex={1}
      justify='flex-end'
      display={{ base: 'none', lg: 'flex' }}
    >
      {value <= 1 && value > 0.5 && (
        <IconButton
          icon={<BsVolumeDownFill fontSize='1.4em' />}
          aria-label='Set volume 0'
          size='md'
          variant='ghost'
          onClick={() => setVolume(0)}
        />
      )}
      {value <= 0.5 && value > 0 && (
        <IconButton
          icon={<BsVolumeDownFill fontSize='1.4em' />}
          aria-label='Set volume 0'
          size='md'
          variant='ghost'
          onClick={() => setVolume(0)}
        />
      )}
      {value === 0 && (
        <IconButton
          icon={<BsFillVolumeMuteFill fontSize='1.4em' />}
          aria-label='Set volume 1'
          size='md'
          variant='ghost'
          onClick={() => setVolume(1)}
        />
      )}
      <Slider
        value={value}
        step={0.1}
        onChange={onChange}
        min={min}
        max={max}
        w={24}
        colorScheme='main'
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </HStack>
  );
};

export default VolumeBar;
