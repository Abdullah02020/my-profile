import "./hero.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { color } from "framer-motion";
Aos.init({ duration: 1000, delay: 400, mirror: true });
import {
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="hero">
      <h1 data-aos="fade-down">
        Hey, I’m Abdullah. <br />
        I'm a Designer & Developer.
      </h1>
      <p data-aos="fade-up">
        Abdullah Mohammed is a versatile designer & developer based in the Yamen,
        dedicated to crafting innovative and visually appealing digital
        experiences.
      </p>
      <ul className="flex">
        <li style={{ color: "#ff3400" }} data-aos="fade-up" data-aos-delay="400" >
          <FaHtml5 />
        </li>
        <li style={{ color: "#0067f1" }}  data-aos="fade-up" data-aos-delay="450">
          <FaCss3 />
        </li>
        <li style={{ color: "#fede23" }}  data-aos="fade-up" data-aos-delay="500">
          <FaJs />
        </li>
        <li style={{ color: "#0067f1" }}  data-aos="fade-up" data-aos-delay="550">
          <FaReact />
        </li>
        <li style={{ color: "#df6195" }}  data-aos="fade-up" data-aos-delay="600">
          <FaSass />
        </li>
        <li style={{ color: "#ff4013" }}  data-aos="fade-up" data-aos-delay="600">
          <FaGitAlt />
        </li>
      </ul>
    </section>
  );
};

export default Hero;
