import "./hero.css";
import Lottie from "lottie-react";
import lap from "../../../public/lap.json";
import { useRef } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const lottieRef = useRef();

  return (
    <section  className="hero flex">
      <div className="left-section">
        <div className="avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="img-avater"
            src="public/abdullah.png"
            alt=""
          />

          <div className="icon-verified"></div>
        </div>
        <motion.h1 className="titel">
          software desiger,founder,and amateur astronaut.
        </motion.h1>
        <p className="sup-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          aspernatur eligendi hic blanditiis aliquid ratione unde assumenda quas
          sunt corrupti, culpa commodi odio veniam repellendus alias tenetur
          nam, in repellat.
        </p>
        <div className="icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-section animtion">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={lap}
        />
      </div>
    </section>
  );
};

export default Hero;
