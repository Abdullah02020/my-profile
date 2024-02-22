// @ts-nocheck
import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  return (
    <main id="home" className="flex">
      <section className="flex left-section">
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
        <button
          onClick={() => {
            setcurrentActive("js");
            const newArr = myProjects.filter((item) => {
              return item.cat === "js";
            });
            setArr(newArr);
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JaveScript
        </button>
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
      </section>
      <section className="flex right-section">
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
              <img width={300} src={item.imgPath} alt="" />
              <div style={{ width: "300px" }} className="box">
                <h1 className="title">{item.title}</h1>
                <p className="suptitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  rerum ipsa harum?
                </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a className="link flex" href="#">
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
