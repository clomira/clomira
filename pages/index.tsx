import AboutHome from "../components/HomePage/AboutHome";
import WorkHome from "../components/HomePage/WorkHome";
import ContactUs from "../components/HomePage/ContactUs";
import Head from "next/head";
import { useContext } from "react";
import { UserContext } from "../components/Context/Credential";

function Home() {
  const user = useContext(UserContext);
  return (
    <>
      <Head>
        <title>Clomira | Home</title>
      </Head>
      <AboutHome />
      <WorkHome />
      <ContactUs />
    </>
  );
}

export default Home;
