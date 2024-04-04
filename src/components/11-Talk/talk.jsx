import "./talk.css";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: false });
import { Link } from "react-router-dom";
function talk() {
  return (
    <div className="talk">
      <h1 className="talk__header" data-aos="fade-up" data-aos-delay="450">Have a dream project?</h1>
      <p className="talk__sup" data-aos="fade-up" data-aos-delay="550">
        Let's transform your vision into stunning reality. Reach out today and
        start the journey to a remarkable brand presence.
      </p>

      <h1 className="talk__link" data-aos="flip-down" data-aos-delay="650">
      <a href="/conecct">Let's talk</a>
      </h1>
    </div>
  );
}

export default talk;
