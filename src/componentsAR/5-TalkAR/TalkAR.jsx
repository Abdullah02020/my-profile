import "./TalkAR.css";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: false });
function TalkAR() {
  return (
<div className="talk">
  <h1 className="talk__header" data-aos="fade-up" data-aos-delay="450">هل لديك مشروع أحلام؟</h1>
  <p className="talk__sup" data-aos="fade-up" data-aos-delay="550">
    دعونا نحول رؤيتك إلى واقع مذهل. تواصل معنا اليوم وابدأ رحلتك نحو حضور علامتك التجارية بشكل لا يُنسى.
  </p>

  <h1 className="talk__link" data-aos="flip-down" data-aos-delay="650">
  <a href="/conecctAR">دعونا نتحدث</a>
  </h1>
</div>

  );
}

export default TalkAR;

