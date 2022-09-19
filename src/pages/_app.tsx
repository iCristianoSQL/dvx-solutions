import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query';
import { ToastAlert } from '../components';
import { queryClient } from '../services/queryClient';

import "../../styles/tailwind.css"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastAlert />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
