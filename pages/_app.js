import Head from 'next/head'

import Layout from '../components/layout/layout';
import "../styles/global.css";
import { Roboto } from 'next/font/google';
import { ThemeContextProvider } from '../store/theme-context';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

function App({ Component, pageProps }) {
    return (
        <ThemeContextProvider>
            <Layout>
                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                </Head>
                <main className={roboto.className}>
                    <Component {...pageProps} />
                </main>
            </Layout>
        </ThemeContextProvider>
    );
}

export default App
