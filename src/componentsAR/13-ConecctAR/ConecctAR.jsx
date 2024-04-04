import "./ConecctAR.css";
import Lottie from "lottie-react";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: false });
import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "../../../public/Animation - 1708611895083.json";
import emile from "../../../public/emil.json";
const ConecctAR = () => {
  const [state, handleSubmit] = useForm("xrgnkzaj");

  if (state.succeeded) {
    return (
      <h1 className="send">
        <Lottie
          loop={false}
          style={{ height: 60, marginTop: 10 }}
          animationData={doneAnimation}
        />{" "}
        تم إرسال رسالتك بنجاح 👌
      </h1>
    );
  }
  return (
    <section className="conect">
      <h1 className="titel" data-aos="fade-up" data-aos-delay="400">
        لنعمل معاً
      </h1>
      <p className="suptitel" data-aos="fade-up" data-aos-delay="500">
        أود معرفة المزيد عن مشروعك وكيف يمكنني مساعدتك. لا تتردد في مشاركة
        تفاصيل مشروعك باستخدام النموذج أدناه. إذا كنت تفضل الإرسال عبر البريد
        الإلكتروني بدلاً من ذلك، يمكنك التواصل معي على
        <br />
        <span>eng.abdullah.1346@gmail.com</span>
        <br />
        <br />
        
        أو يمكنك التواصل معي عبر الواتساب:
        <br />
        <span><a href="https://wa.me/+967775593001" target="blank"> 775593001</a></span>
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="em" data-aos="fade-right" data-aos-delay="500">
            <label htmlFor="email">البريد الإلكتروني:</label>
            <input
              required
              type="email"
              name="email"
              id="emile"
              placeholder="بريدك الإلكتروني"
            />{" "}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div
            className="flex"
            style={{ marginTop: "25px" }}
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <label htmlFor="message" className="l2">رسالتك:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="أخبرني المزيد عن مشروعك"
            ></textarea>{" "}
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="supmit"
            data-aos="flip-down"
            data-aos-delay="400"
          >
            {state.submitting ? "جاري الإرسال... " : "إرسال"}
          </button>
        </form>
        <div className="animation">
          <Lottie
            style={{ height: 490 }}
            animationData={emile}
            data-aos="fade-left"
            data-aos-delay="600"
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default ConecctAR;
