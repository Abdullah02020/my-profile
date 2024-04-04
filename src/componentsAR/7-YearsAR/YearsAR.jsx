
import "./YearsAR.css"
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1000, delay: 400, mirror: false });

function YearsAR() {
  return (
    <div className="years flex" data-aos="fade-up" data-aos-delay="10">
      <div className="years__box" data-aos="fade-right" data-aos-delay="700">
        <h1>10+</h1>
        <p>سنوات من الخبرة</p>
      </div>
      <div className="years__box" data-aos="fade-right" data-aos-delay="800">
        <h1>72+</h1>
        <p>مشاريع مكتملة</p>
      </div>
      <div className="years__box" data-aos="fade-right" data-aos-delay="900">
        <h1>95%</h1>
        <p>رضا العملاء</p>
      </div>
      <div className="years__box" data-aos="fade-right" data-aos-delay="1000">
        <h1>15+</h1>
        <p>جوائز تصميم</p>
      </div>
    </div>
  );
}

export default YearsAR;
