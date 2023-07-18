import ScrollToTop from "../../components/ScrollToTop";
import About from "../../components/About";
import Works from "../../components/Works";
import Contact from "../../components/Contact";
import "./Home.scss";

function Home() {
  return (
    <div>
      <ScrollToTop />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default Home;
