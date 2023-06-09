import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../../components/Layout";
import store from '../../store/store'
import { Provider } from 'react-redux'
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';



const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <Provider store={store}>
    <ThemeProvider attribute='class'>
      <Layout>
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} className="md-auto" />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
    </Provider>
  );
}


export default  App