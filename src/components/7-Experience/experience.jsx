import "./experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Expriencelist } from "../../constants/index";
Aos.init({ duration: 1000, delay: 400, mirror: false });
function experience() {
  return (
    <div className="ex section__padding">
      <h1 className="ex-header" data-aos="fade-right">
        Experience & Education
      </h1>
      {Expriencelist.map((item) => (
        <div key={item.id} className="ex__box" data-aos="fade-up">
          <p className="date">{item.Year}</p>
          <div className="box__det">
            <h1 className="job-title">
              {item.jobtitle}{" "}
              {/* Using item.title to dynamically insert the title */}
            </h1>
            <p className="jop-sup">{item.jopsup}</p>
            <p className="job-dec">{item.jobdec}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default experience;
