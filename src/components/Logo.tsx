import { Heading, HStack, Icon, IconProps, StackProps } from '@chakra-ui/react';
import { MdOutlineLibraryMusic } from 'react-icons/md';

const Logo = (props: StackProps) => {
  return (
    <HStack w='max-content' {...props}>
      <LogoIcon />
      <Heading
        fontSize={{ base: '3xl', md: '4xl' }}
        fontWeight='bold'
      >
        Listen Me
      </Heading>
    </HStack>
  );
};

const LogoIcon = (props: IconProps) => {
  return (
    <Icon
      as={MdOutlineLibraryMusic}
      fontSize='2em'
      color='main.500'
      _dark={{ color: 'main.200' }}
      {...props}
    />
  );
};

export { Logo, LogoIcon };

