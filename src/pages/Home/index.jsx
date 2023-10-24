import { Analytics } from "@vercel/analytics/react";
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
      <Analytics />
    </div>
  );
}

export default Home;
