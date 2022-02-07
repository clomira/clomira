import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ReactNode} from "react";
import { NextPage } from "next";
import { AuthProvider } from "../components/Context/Credential";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  if (Component.getLayout) {
    return Component.getLayout(
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  } else {
    return (
      <>
        <AuthProvider>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </>
    );
  }
}

export default MyApp;
