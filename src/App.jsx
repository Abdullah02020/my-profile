import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Footer from "./components/5-footer/Footer";
import Talk from "./components/11-Talk/talk";
import Skills from "./components/12-skills/skills";
import Projects from "./components/projects/projects";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScroll(true);
      } else {
        setshowScroll(false);
      }
    });
  }, []);
  const [showScroll, setshowScroll] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="line" />
      <Projects />
      <div className="line" />
      <Skills />
      <div className="line" />
      <Talk />
      <div className="line" />
      <Footer />

      <a style={{ opacity: showScroll ? 1 : 0, transition: "0.8s" }} href="#up">
        <button className="icon-arrow-up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;
