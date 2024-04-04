// @ts-nocheck
import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: true });
function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  return (
    <main className="flex">
      <div className="main-header" data-aos="fade-down">
        <h1>Design & Development Projects</h1>
      </div>
      <section className="flex left-section" data-aos="fade-up">
        <button
          onClick={() => {
            setcurrentActive("all");
            const newArr = myProjects;
            setArr(newArr);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        {/* <button
          onClick={() => {
            setcurrentActive("js");
            const newArr = myProjects.filter((item) => {
              return item.cat === "js";
            });
            setArr(newArr);
          }}
          className={currentActive === "js" ? "active" : null}
        >
          Next.js
        </button> */}
        <button
          onClick={() => {
            setcurrentActive("react");
            const newArr = myProjects.filter((item) => {
              return item.cat === "react";
            });
            setArr(newArr);
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            setcurrentActive("css");
            const newArr = myProjects.filter((item) => {
              return item.cat === "css";
            });
            setArr(newArr);
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
      </section>
      <section className="flex right-section">
        <div className=""></div>
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img src={item.imgPath} alt="" />
                <div className="box">
                  <h1 className="title">{item.title}</h1>
                  <p className="suptitle">{item.sup}</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <a
                        className="icon-github"
                        href={item.git}
                        target="blank"
                      ></a>
                    </div>
                    <a className="link flex" href={item.link} target="blank">
                      Demo
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      >
                        {" "}
                      </span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
