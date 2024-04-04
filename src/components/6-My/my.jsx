import "./my.css";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1000, delay: 400, mirror: false });
function my() {
  return (
    <div className="my section__padding">
      <h1 data-aos="fade-up" data-aos-delay="450">
        About Abdullah Mohammed
      </h1>
      <div className="my-content">
        <div className="my__img" data-aos="fade-up" data-aos-delay="450">
          <img src="./about-page.png" alt="" />
        </div>
        <div className="my__text" data-aos="fade-up" data-aos-delay="600">
          <p>
            meet Abdullah Mohammed, a dedicated freelance front-end developer
            with a deep passion for creating seamless digital experiences.
            Specializing in React, CSS, HTML, and JavaScript, I bring four years
            of intensive experience to the table. Throughout this time, I have
            not only sharpened my skills in these critical front-end
            technologies but have also excelled in conveying compelling visual
            narratives through my projects. My career is marked by a commitment
            to continuous improvement and adaptation, positioning me as a
            versatile and dynamic creator in the constantly shifting landscape
            of design and technology
            <br />
            <br />
            My journey into design and technology was driven by a deep-rooted
            passion for visual art. From sketching in my youth to discovering
            web design as a teenager, I embraced the digital canvas early on.
            Mastering HTML and CSS, I crafted my first website, a milestone that
            fused my artistic skills with digital possibilities, marking the
            start of my creative and technical exploration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default my;
