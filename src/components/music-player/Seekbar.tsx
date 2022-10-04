import {
  Box,
  Button,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useRangeSlider,
} from '@chakra-ui/react';
import React from 'react';
import { MdGraphicEq } from 'react-icons/md';

const Seekbar = ({ value, min, max, onChange, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <HStack display={{ base: 'none', md: 'flex' }}>
      <Button size='xs' onClick={() => setSeekTime(appTime - 5)}>-</Button>
      <Text>{value === 0 ? '0:00' : getTime(value)}</Text>
      <Slider value={value} onChange={onChange} min={min} max={max} w='96' colorScheme='main'>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text>{max === 0 ? '0:00' : getTime(max)}</Text>
      <Button size='xs' onClick={() => setSeekTime(appTime + 5)}>+</Button>
    </HStack>
  );
};

export default Seekbar;
