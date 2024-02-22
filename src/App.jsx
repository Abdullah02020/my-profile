import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main-items/Main";
import Content from "./components/4-content/Content";
import Footer from "./components/5-footer/Footer";
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
      <Main />
      <div className="line" />
      <Content />
      <div className="line" />
      <Footer />
    
        <a style={{opacity:showScroll? 1 : 0, transition: "0.8s"}} href="#up">
          <button className="icon-arrow-up scroll2Top"></button>
        </a>
      
    </div>
  );
}

export default App;
