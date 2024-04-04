import "./SkillsAR.css";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: false });
function SkillsAR() {
  return (
    <div className="skillAR">
      <div className="skillAR-header">
        <p data-aos="fade-up" data-aos-delay="400">
          المهارات والخبرات
        </p>
        <h1 data-aos="fade-up" data-aos-delay="450">
          مهاراتي المتألقة، <br /> خبرات تستطيع الوثوق بها
        </h1>
        <div className="link" data-aos="fade-up" data-aos-delay="400">
          <a href="/aboutAR">المزيد عني</a>
        </div>
      </div>
      <div className="skillAR-boxes">
        <div className="box" data-aos="fade-left" data-aos-delay="400">
          <div className="header flex">
            <h1>01</h1>
            <h1>هوية العلامة التجارية</h1>
          </div>
          <p>
            نقوم بتطوير هويات تجارية متكاملة تنطق بلغة الإبداع وتتحدث بصوت
            علامتك التجارية. نصمم تجربة بصرية تعكس قيم وأهداف شركتك، مؤكدين على
            تميزها وتفردها في السوق.
          </p>
        </div>

        <div className="box" data-aos="fade-left" data-aos-delay="500">
          <div className="header flex">
            <h1>02</h1>
            <h1>تصميم واجهات المستخدم</h1>
          </div>
          <p>
            نصمم واجهات مستخدم جذابة وسهلة الاستخدام، تركز على تحسين تجربة
            المستخدم وتعزيز التفاعل مع المنتج. نستخدم أحدث التقنيات وأفضل
            الممارسات لإنشاء تصاميم تلبي احتياجات مشروعك.
          </p>
        </div>

        <div className="box" data-aos="fade-left" data-aos-delay="600">
          <div className="header flex">
            <h1>03</h1>
            <h1>تطوير ويب متكامل</h1>
          </div>
          <p>
            نقدم خدمات تطوير ويب متكاملة تبدأ من فكرة المشروع وصولاً إلى إطلاق
            الموقع. نعمل على بناء مواقع سريعة، متجاوبة، ومتوافقة مع محركات
            البحث، مستخدمين أحدث التقنيات وأفضل الممارسات.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillsAR;
