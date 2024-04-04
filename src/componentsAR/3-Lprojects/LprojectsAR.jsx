import "./LprojectsAR.css";
import { FaGithub } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, once: true });
function LprojectsAR() {
  return (
    <div className="pro section__padding">
      <h1 className="pro-title" data-aos="fade-up" data-aos-delay="400">
        أحدث إبداعاتي
      </h1>

      <div className="box flex">
        <img src="./11.png" alt="" data-aos="fade-right" data-aos-delay="400" />
        <div className="text">
          <h1 data-aos="fade-left" data-aos-delay="400">
            ثورة التواصل في عالم الويب-3
          </h1>
          <p data-aos="fade-left" data-aos-delay="500">
            استلهم قوة اللامركزية مع Status، بوابتك نحو التواصل الكريبتو الآمن
            ومفتوح المصدر. أكثر من مجرد تراسل، إنه التطبيق الخارق الذي يعيد
            تعريف الاتصال.
          </p>
          <ul data-aos="fade-left" data-aos-delay="550">
            <li>
              <a href="https://github.com/Abdullah02020/web-3" target="blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://status-web3.web.app/" target="blank">
                عرض مباشر
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="box flex">
        <div className="text">
          <h1 data-aos="fade-right" data-aos-delay="400">
            هُوبانك - تجديد عالم البنوك
          </h1>
          <p data-aos="fade-right" data-aos-delay="500">
            استكشف رفاهية المال مع هُوبانك، حيث يجتمع سحر التصميم العصري مع حلول
            البطاقات الائتمانية المُصممة خصيصًا لك.
          </p>
          <ul data-aos="fade-right" data-aos-delay="450">
            <li>
              <a
                href="https://github.com/Abdullah02020/project_hoobank-main"
                target="blank"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://hoobanky.web.app/" target="blank">
                عرض مباشر
              </a>
            </li>
          </ul>
        </div>
        <img src="./10.png" alt="" data-aos="fade-left" data-aos-delay="400" />
      </div>

      <div className="projxects " data-aos="fade-left">
        <a href="/PrpjectsAR"> استعراض جميع المشاريع</a>
      </div>
    </div>
  );
}

export default LprojectsAR;
