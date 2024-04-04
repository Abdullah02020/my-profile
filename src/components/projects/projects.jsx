import "./projects.css";

import { FaGithub } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, once: true });
function projects() {
  return (
    <div className="pro section__padding">
      <h1 className="pro-title " data-aos="fade-up" data-aos-delay="400">
        Latest Projects
      </h1>
      <div className="box flex">
        <img src="./11.png" alt="" data-aos="fade-right" data-aos-delay="400" />
        <div className="text">
          <h1 data-aos="fade-left" data-aos-delay="400">
            The Web-3 Communication Revolution{" "}
          </h1>
          <p data-aos="fade-left" data-aos-delay="500">
            Harness the power of decentralization with Status, your gateway to
            encrypted, open-source crypto communication. Beyond messaging, a
            super app redefining connectivity.
          </p>
          <ul data-aos="fade-left" data-aos-delay="550">
            <li>
              <a href="https://github.com/Abdullah02020/web-3" target="blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://status-web3.web.app/" target="blank">
                Live Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="box flex">
        {" "}
        <div className="text">
          {" "}
          <h1 data-aos="fade-right" data-aos-delay="400">
            hooBank - Banking Reimagined
          </h1>
          <p data-aos="fade-right" data-aos-delay="500">
            Discover elegance in finance with hooBank, where cutting-edge design
            meets personalized credit card solutions.
          </p>{" "}
          <ul data-aos="fade-right" data-aos-delay="450">
            <li>
              <a
                href="https://github.com/Abdullah02020/project_hoobank-main"
                target="blank"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://hoobanky.web.app/" target="blank">
                Live Demo
              </a>
            </li>
          </ul>
        </div>
        <img src="./10.png" alt="" data-aos="fade-left" data-aos-delay="400" />
      </div>
      <div className="projxects">
        <a href="/projects"> See all projects</a>
      </div>
    </div>
  );
}

export default projects;
