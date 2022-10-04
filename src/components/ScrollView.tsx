import { Box, BoxProps, useUpdateEffect } from '@chakra-ui/react';
import { useElementScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ScrollView = (props: BoxProps & { onScroll?: any }) => {
  const { onScroll, ...rest } = props;
  const [y, setY] = useState(0);
  const elRef = useRef<any>();
  const { scrollY } = useElementScroll(elRef);
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  useUpdateEffect(() => {
    onScroll?.(y > 5 ? true : false);
  }, [y]);

  return (
    <Box
      ref={elRef}
      w='full'
      flex='1'
      overflow='auto'
      px='6'
      pb='6'
      {...rest}
    />
  );
};

export default ScrollView;
