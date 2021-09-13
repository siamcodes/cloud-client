import Head from "next/head";
import '../styles.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="favicon.ico" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
            </Head>
            <Component {...pageProps} />
        </div>
    )
}