import { Logo, LogoIcon } from '@/components/Logo';
import { MobileNavButton, MobileNavContent } from '@/components/MobileNav';
import ThemeButton from '@/components/theme-button';
import { NAV_LINKS } from '@/data/nav-links';
import { NavLink } from '@/types/NavLink';
import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  HTMLChakraProps,
  Icon,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { HEADER_HEIGHT } from 'src/constants';

const NavItem = ({ href, label, icon }: NavLink) => {
  const router = useRouter();
  const isActive = router.asPath.startsWith(href);

  return (
    <NextLink href={href} passHref>
      <Button
        aria-label={`Listen Me, Go to ${label} page`}
        cursor='pointer'
        variant='ghost'
        ml={4}
        size='sm'
        leftIcon={<Icon as={icon} />}
        transition='0.2s all'
        fontWeight={isActive ? 'semibold' : 'normal'}
        _focus={{ outline: 'none' }}
      >
        {label}
      </Button>
    </NextLink>
  );
};

const HeaderContent = () => {
  const mobileNav = useDisclosure();
  const mobileNavBtnRef = useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <>
      <Flex w='100%' h='100%' px='6' align='center' justify='space-between'>
        <HStack align='center' spacing={2}>
          <NextLink href='/' passHref>
            <chakra.a
              display='block'
              aria-label='Top Tendance, Back to homepage'
            >
              <Logo display={{ base: 'none', md: 'flex' }} />
              <Box minW='3rem' display={{ base: 'flex', md: 'none' }}>
                <LogoIcon />
              </Box>
            </chakra.a>
          </NextLink>
          <chakra.nav display={{ base: 'none', lg: 'flex' }}>
            {NAV_LINKS.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </chakra.nav>
        </HStack>
        <Flex justify='flex-end' w='100%' align='center' maxW='1100px'> 
          <HStack spacing={3}>
            <ThemeButton />
            <MobileNavButton
              ref={mobileNavBtnRef}
              aria-label='Open Menu'
              onClick={mobileNav.onOpen}
            />
          </HStack>
        </Flex>
      </Flex>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </>
  );
};

const Header = (props: HTMLChakraProps<'header'>) => {
  const { maxW = '8xl', maxWidth = '8xl' } = props;
  const ref = useRef<HTMLHeadingElement>();
  const [y, setY] = useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};

  const { scrollY } = useViewportScroll();
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? 'md' : undefined}
      transition='box-shadow 0.2s, background-color 0.2s'
      position='sticky'
      h={HEADER_HEIGHT + 'px'}
      alignContent='center'
      top='0'
      zIndex='3'
      bg='white'
      _dark={{ bg: 'gray.900' }}
      left='0'
      right='0'
      width='full'
      {...props}
    >
      <chakra.div height='full' mx='auto' maxW={maxW} maxWidth={maxWidth}>
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
};

export default Header;