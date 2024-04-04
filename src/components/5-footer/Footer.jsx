import "./footer.css";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex">
      <p>
        © 2024 Spencer Sharp. Designed by{" "}
        <span>
          {" "}
          <a href="">Abdullah Mohammed</a>
        </span>
        .
      </p>
      <ul className="flex">
        <li>
          <div className="icon">
            {" "}
            <a href="https://wa.me/+967775593001" target="blank">
              <FaWhatsapp />
            </a>
          </div>
        </li>
        <li>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/abdullah-mohammed-788624269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </li>
        <li>
          <div className="icon">
            <a href="https://github.com/Abdullah02020" target="blank">
              <FaGithub />
            </a>
          </div>
        </li>

        <li>
          <a href="AR">AR</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
