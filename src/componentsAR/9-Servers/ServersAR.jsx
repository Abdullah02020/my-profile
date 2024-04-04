import "./ServersAR.css";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: false });
function ServersAR() {
  return (
    <div className="services section__padding">
      <h1 className="services__header" data-aos="fade-right">
        الخدمات
      </h1>
      <div className="services__items flex">
        <div className="f">
          <div
            className="services__box flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1>01</h1>
            <p>هوية العلامة التجارية</p>
          </div>
        </div>

        <div className="f">
          <div
            className="services__box flex"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1>02</h1>
            <p>تصميم واجهات المستخدم</p>
          </div>
        </div>

        <div className="f">
          <div
            className="services__box flex"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h1>03</h1>
            <p>تطوير ويب متكامل</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServersAR;
