import { Center, CircularProgress } from '@chakra-ui/react';

const Loader = ({ size = 'sm' }) => {
  return (
    <Center>
      <CircularProgress
        color=''
        size={size === 'sm' ? '30px' : size === 'md' ? '40px' : '50px'}
        isIndeterminate
      />
    </Center>
  );
};

export default Loader;