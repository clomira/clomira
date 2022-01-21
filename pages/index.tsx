import AboutHome from "../components/HomePage/AboutHome";
import WorkHome from "../components/HomePage/WorkHome";
import ContactUs from "../components/HomePage/ContactUs";
import Head from "next/head";
import { useAuth } from "../firebase/auth";

function Home() {
  // const { user } = useAuth();
  return (
    <>
      <Head>
        <title>Clomira | Home</title>
      </Head>
      {/* <h1>{`User Id: ${user ? user.uid : "No user Signed In"}`}</h1> */}
      <AboutHome />
      <WorkHome />
      <ContactUs />
    </>
  );
}

export default Home;
