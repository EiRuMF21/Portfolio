import { useEffect } from "react";
import Header from "./components/Header";
import Work from "./components/Work";
import About from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Footer";
import Lenis from "@studio-freight/lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Assign lenis to the global window object
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <section id="about-me">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
