import "./ExprienceAR.css";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1000, delay: 400, mirror: false });
function ExprienceAR() {
  return (
    <div className="ex section__padding">
      <h1 className="ex-header" data-aos="fade-right">
        الخبرة
      </h1>
      {/* تجربة العمل في تكنولوجيا رؤيا */}
      <div className="ex__box" data-aos="fade-up">
        <p className="date">[2023]</p>
        <div className="box__det">
          <h1 className="job-title">مطور واجهات أمامية</h1>
          <p className="jop-sup">تكنولوجيا رؤيا</p>
          <p className="job-dec">
            خلال فترة عملي في تكنولوجيا رؤيا، تخصصت في تطوير واجهات الويب
            الأمامية، مبتكرًا واجهات استخدام سلسة ومتجاوبة. دوري شمل التعاون
            الوثيق مع فرق التصميم والخلفية لتقديم تجارب ويب بلا انقطاع. لم تسهم
            مساهماتي في تحسين التفاعل مع المستخدمين فحسب، بل علمتني أيضًا أهمية
            العمل الجماعي والتواصل الفعّال في مشاريع التكنولوجيا.
          </p>
        </div>
      </div>

      {/* تجربة المشاريع الشخصية */}
      <div className="ex__box" data-aos="fade-up">
        <p className="date">2021 - الحالي</p>
        <div className="box__det">
          <h1 className="job-title">مطور مستقل</h1>
          <p className="jop-sup">مشاريع شخصية وتطوير المهارات</p>
          <p className="job-dec">
            منذ عام 2021، بدأت رحلة التحسين الذاتي وإتقان التقنية من خلال سلسلة
            من المشاريع الشخصية. تنوعت هذه المساعي من تطوير تطبيقات ويب مبتكرة
            إلى استكشاف أعماق تعلم الآلة. كل مشروع كان خطوة نحو تنقية مهارات
            البرمجة لدي، فهم التكنولوجيات الجديدة، والمساهمة في محفظتي، كل ذلك
            مع التوازن بين التزاماتي الأكاديمية.
          </p>
        </div>
      </div>

      {/* التعليم الجامعي */}
      <div className="ex__box" data-aos="fade-up">
        <p className="date">2020 - 2024</p>
        <div className="box__det">
          <h1 className="job-title">بكالوريوس في علوم الحاسوب</h1>
          <p className="jop-sup">
            [كلية/جامعة عدن لعلوم الحاسوب وتكنولوجيا المعلومات]
          </p>
          <p className="job-dec">
            أتابع حاليًا برنامج بكالوريوس في علوم الحاسوب، حيث أعمق فهمي للجوانب
            النظرية والعملية لعلوم الحاسوب. يجهزني هذا البرنامج بالمهارات
            اللازمة للتنقل والمساهمة في المشهد التقني المتطور باستمرار.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExprienceAR;
