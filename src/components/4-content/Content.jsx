import "./content.css";
import Lottie from "lottie-react";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 1000, delay: 400, mirror: false });
import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "../../../public/Animation - 1708611895083.json";
import emile from "../../../public/emil.json";
const Content = () => {
  const [state, handleSubmit] = useForm("xrgnkzaj");

  if (state.succeeded) {
    return (
      <h1 className="send">
        <Lottie loop={false} style={{height: 60, marginTop: 10}} animationData={doneAnimation} /> Your message has been sent
        successfully 👌
      </h1>
    );
  }
  return (
    <section className="conect">
      <h1 className="titel" data-aos="fade-up" data-aos-delay="400">
    
        Let's work together

      </h1>
      <p className="suptitel" data-aos="fade-up" data-aos-delay="500">
      I'd love to learn more about your project and how I can assist you. Feel free to share your project details using the form below. If you prefer to email instead, you can reach out to me at 
      <br />
      <span>eng.abdullah.1346@gmail.com</span>


      </p>
      <div style={{justifyContent: "space-between"}} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="em" data-aos="fade-right" data-aos-delay="500">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="emile" placeholder="Emile" />{" "}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "25px" }} data-aos="fade-right" data-aos-delay="600">
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message" placeholder="Tell me more about your project"></textarea>{" "}
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="supmit" data-aos="flip-down" data-aos-delay="400">
            {state.submitting ? "submitting... " : "submit"}
          </button>
        </form>
        <div className="animation"><Lottie style={{height: 490}} animationData={emile} data-aos="fade-left" data-aos-delay="600"/> </div>
      </div>
    </section>
  );
};

export default Content;
