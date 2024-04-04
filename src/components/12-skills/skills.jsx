import "./skills.css";
import Aos from "aos";
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
        {/* Skill Box 1: React Development */}
        <div className="box" data-aos="fade-left" data-aos-delay="200">
          <div className="header flex">
            <h1>01</h1>
            <h1>React Development</h1>
          </div>
          <p>
            Specializing in crafting dynamic user interfaces with React.js,
            leveraging hooks and state management for seamless, interactive web
            applications. My work emphasizes performance, responsive design, and
            a user-centric approach.
          </p>
        </div>

        {/* Skill Box 2: UI/UX Design */}
        <div className="box" data-aos="fade-left" data-aos-delay="400">
          <div className="header flex">
            <h1>02</h1>
            <h1>UI/UX Design</h1>
          </div>
          <p>
            With a keen eye for design and user experience, I create visually
            appealing and intuitive layouts. My approach integrates modern
            design principles with usability testing to ensure engaging and
            accessible web experiences.
          </p>
        </div>

        {/* Skill Box 3: Frontend Technologies */}
        <div className="box" data-aos="fade-left" data-aos-delay="600">
          <div className="header flex">
            <h1>03</h1>
            <h1>Frontend Technologies</h1>
          </div>
          <p>
            Proficient in a wide array of frontend technologies including HTML5,
            CSS3, JavaScript (ES6+). I'm dedicated to building responsive and
            cross-browser compatible web applications, optimizing for speed and
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default skills;
