import Layout from '../components/layout/layout';
import "../styles/global.css"

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App
