import Layout from '@/components/layout';
import { store } from '@/redux/store';
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/josefin-sans/700.css';
import { AppProps } from 'next/app';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </Provider>
      </ChakraProvider>
    </StrictMode>
  );
};

export default App;
