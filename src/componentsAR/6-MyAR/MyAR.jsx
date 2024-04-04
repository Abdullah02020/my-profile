import "./MyAR.css";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({ duration: 1000, delay: 400, mirror: false });
function MyAR() {
  return (
    <div className="my section__padding">
      <h1 data-aos="fade-up" data-aos-delay="450">
        عن عبدالله محمد
      </h1>
      <div className="my-content">
        <div className="my__img" data-aos="fade-up" data-aos-delay="450">
          <img src="./about-page.png" alt="" />
        </div>
        <div className="my__text" data-aos="fade-up" data-aos-delay="600">
          <p>
            تعرف على عبدالله محمد، مطور واجهات أمامية مستقل متفاني، يتمتع بشغف
            عميق لخلق تجارب رقمية سلسة. متخصص في React، CSS، HTML، وJavaScript،
            أجلب معي أربع سنوات من الخبرة المكثفة. خلال هذا الوقت، لم أكتفِ
            بتحسين مهاراتي في هذه التقنيات الأساسية لواجهة المستخدم فحسب، بل
            تميزت أيضًا في نقل الروايات البصرية الجذابة من خلال مشاريعي. تتميز
            مسيرتي المهنية بالالتزام بالتحسين المستمر والتكيف، مما يضعني كمبدع
            متعدد الجوانب وديناميكي في المشهد المتغير باستمرار للتصميم
            والتكنولوجيا
            <br />
            <br />
            كانت رحلتي في عالم التصميم والتكنولوجيا مدفوعة بشغف عميق للفن
            البصري. من الرسم في صغري إلى اكتشاف تصميم الويب كمراهق، اعتنقت
            اللوحة الرقمية مبكرًا. بإتقان HTML وCSS، صممت موقعي الأول، وهو إنجاز
            دمج مهاراتي الفنية مع الإمكانيات الرقمية، مما مهد الطريق لبداية
            استكشافي الإبداعي والتقني.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyAR;
