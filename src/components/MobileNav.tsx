import { Logo } from '@/components/Logo';
import { NAV_LINKS } from '@/data/nav-links';
import { NavLink } from '@/types/NavLink';
import {
  Center,
  CloseButton, Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  IconButtonProps,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useUpdateEffect,
  VStack
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RemoveScroll } from 'react-remove-scroll';
import ScrollView from '@/components/ScrollView';

const NavItem = ({ href, label, icon }: NavLink) => {
  const router = useRouter();
  const bgActiveHoverColor = useColorModeValue('gray.100', 'whiteAlpha.100');

  const isActive = router.asPath.startsWith(href);

  return (
    <GridItem as={NextLink} href={href}>
      <Center
        flex='1'
        minH='40px'
        as='button'
        rounded='md'
        transition='0.2s all'
        fontWeight={isActive ? 'semibold' : 'medium'}
        bg={isActive ? 'brand.400' : undefined}
        borderWidth={isActive ? undefined : '1px'}
        color={isActive ? 'white' : undefined}
        _hover={{
          bg: isActive ? 'brand.500' : bgActiveHoverColor,
        }}
      >
        <Icon as={icon} />
        <Text ml={2}>{label}</Text>
      </Center>
    </GridItem>
  );
};

interface MobileNavContentProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const MobileNavContent = (props: MobileNavContentProps) => {
  const { isOpen, onClose } = props;
  const closeBtnRef = useRef<HTMLButtonElement>();
  const bgColor = useColorModeValue('white', 'gray.900');

  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    if (showOnBreakpoint == false) {
      onClose();
    }
  }, [showOnBreakpoint, onClose]);

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus();
      });
    }
  }, [isOpen]);

  const [shadow, setShadow] = useState<string>();

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.div
            transition={{ duration: 0.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <VStack
              w='100%'
              bg={bgColor}
              h='100vh'
              overflow='auto'
              pos='absolute'
              justify='center'
              top='0'
              left='0'
              zIndex={20}
              spacing={1}
            >
              <HStack
                w='full'
                justify='space-between'
                align='center'
                px='6'
                pt={{ base: '4', md: '3.5' }}
                pb={{ base: '4', md: '3.5' }}
              >
                <Logo />
                <CloseButton ref={closeBtnRef} onClick={onClose} />
              </HStack>
              <ScrollView
                onScroll={(scrolled) => {
                  setShadow(scrolled ? 'md' : undefined);
                }}
              >
                <Grid
                  w='full'
                  px='6'
                  pb='6'
                  pt='2'
                  shadow={shadow}
                  templateColumns='repeat(2, 1fr)'
                  gap='2'
                >
                  {NAV_LINKS.map((item) => (
                    <NavItem key={item.label} {...item} />
                  ))}
                </Grid>
              </ScrollView>
            </VStack>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
};

const MobileNavButton = forwardRef(
  (props: IconButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <IconButton
        ref={ref}
        display={{ base: 'flex', lg: 'none' }}
        aria-label='Open menu'
        fontSize='20px'
        color={useColorModeValue('gray.800', 'inherit')}
        variant='ghost'
        icon={<AiOutlineMenu />}
        {...props}
      />
    );
  }
);
MobileNavButton.displayName = '';

export { MobileNavButton, MobileNavContent };

