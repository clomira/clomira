import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ReactNode, useContext, useState, useEffect } from "react";
import { NextPage } from "next";
import { UserContext, AuthProvider } from "../components/Context/Credential";

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  const user = useContext(UserContext);
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
