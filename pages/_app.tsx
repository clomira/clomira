import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
