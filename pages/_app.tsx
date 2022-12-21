import Footer from '@components/Layout/Footer';
import NavBar from '@components/Layout/NavBar';
import { GlobalStyle } from '@styles/global';
import theme from '@styles/theme';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
