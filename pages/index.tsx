import NavBar from "../components/navBar";
import AboutHome from "./AboutHome";
import WorkHome from "./WorkHome";
import Footer from "../components/footer";
function Home() {
  return (
    <div>
      <NavBar />
      <AboutHome />
      <WorkHome />
      <Footer />
    </div>
  );
}

export default Home;
