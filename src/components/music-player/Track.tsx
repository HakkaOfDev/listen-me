import { HStack, Image, Skeleton, Text, VStack } from '@chakra-ui/react';

const Track = ({ isPlaying, activeSong }) => (
  <HStack flex={1} justify='flex-start'>
    <Image
      src={activeSong?.images?.coverart}
      alt='Cover art'
      w={16}
      h={16}
      fallback={<Skeleton w={16} h={16} />}
    />
    <VStack spacing={0} align='flex-start'>
      <Text
        fontWeight='bold'
        color={isPlaying ? 'main.500' : undefined}
        _dark={{ color: isPlaying ? 'main.300' : undefined }}
        noOfLines={1}
      >
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </Text>
      <Text noOfLines={1}>
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </Text>
    </VStack>
  </HStack>
);

export default Track;
