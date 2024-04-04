import "./experience.css";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1000, delay: 400, mirror: false });
function experience() {
  return (
    <div className="ex section__padding">
      <h1 className="ex-header" data-aos="fade-right">
        Experience & Education
      </h1>

      {/* Ruya Technology Experience */}
      <div className="ex__box" data-aos="fade-up">
        <p className="date">[2023]</p>
        <div className="box__det">
          <h1 className="job-title">Front-End Developer</h1>
          <p className="jop-sup">Ruya Technology</p>
          <p className="job-dec">
            During my tenure at Ruya Technology, I specialized in front-end
            development, crafting intuitive and responsive user interfaces. My
            role involved working closely with both the design and backend teams
            to deliver seamless web experiences. My contributions not only
            improved user engagement but also taught me the importance of
            teamwork and effective communication in technology projects.
          </p>
        </div>
      </div>

      {/* Personal Projects Experience */}
      <div className="ex__box" data-aos="fade-up">
        <p className="date">2021 - Present</p>
        <div className="box__det">
          <h1 className="job-title">Independent Developer</h1>
          <p className="jop-sup">Personal Projects & Skill Development</p>
          <p className="job-dec">
            Since 2021, I have embarked on a journey of self-improvement and
            technical mastery through a series of personal projects. These
            endeavors range from developing innovative web applications to
            exploring the depths of machine learning. Each project is a step
            towards refining my coding skills, understanding new technologies,
            and contributing to my portfolio, all while balancing my academic
            commitments.
          </p>
        </div>
      </div>

      {/* College Education */}
      <div className="ex__box" data-aos="fade-up">
        <p className="date">2020 - 2024</p>
        <div className="box__det">
          <h1 className="job-title">Bachelor of Computer Science</h1>
          <p className="jop-sup">
            [Aden College/University of Computer and Information Technology]
          </p>
          <p className="job-dec">
            Currently pursuing a Bachelor of Computer Science, I am deepening my
            understanding of theoretical and practical aspects of computer
            science. This program is equipping me with the skills necessary to
            navigate and contribute to the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default experience;
