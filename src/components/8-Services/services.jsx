import "./services.css";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: false });
function services() {
  return (
    <div className="services section__padding">
      <h1 className="services__header" data-aos="fade-right">
        Services
      </h1>
      <div className="services__items flex">
        {/* Service Box 1: Front-End Development */}
        <div
          className="services__box flex"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h1>01</h1>
          <p>Front-End Development</p>
        </div>

        {/* Service Box 2: Responsive Design */}
        <div
          className="services__box flex"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1>02</h1>
          <p>Responsive Design</p>
        </div>

        {/* Service Box 3: UI/UX Design */}
        <div
          className="services__box flex"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h1>03</h1>
          <p>UI/UX Design</p>
        </div>
      </div>
    </div>
  );
}

export default services;
