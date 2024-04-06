import "./skills.css";
import Aos from "aos";
import { skillss } from "../../constants/index";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: false });
function skills() {
  return (
    <div className="skill">
      <div className="skill-header">
        <p data-aos="fade-up" data-aos-delay="400">
          Skills & Expertise
        </p>
        <h1 data-aos="fade-up" data-aos-delay="450">
          My Skills that Shine, <br /> Expertise You Can Trust
        </h1>
        <div className="link" data-aos="fade-up" data-aos-delay="400">
          <a href="/about">More about me</a>
        </div>
      </div>
      <div className="skill-boxes">
        {skillss.map((skill) => (
          <div
            key={skill.id}
            className="box"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="header flex">
              <h1>{skill.sillsnumber}</h1>
              <h1>{skill.skillsTitle} </h1>
            </div>
            <p>{skill.skillsdec}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default skills;
