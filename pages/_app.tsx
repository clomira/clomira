import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import { NextPage } from "next";
import { AuthProvider } from "../firebase/GlobalAuth/ContextProvider";
// import initFB from "../firebase/initFireBase";
// import { Auth } from "firebase-admin/lib/auth/auth";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  // initFB();
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

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
