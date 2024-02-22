import "./content.css";
import Lottie from "lottie-react";

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
      <h1 className="titel">
        <span className="icon-envelope" />
        Conact us
      </h1>
      <p className="suptitel">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis,
        laudantium excepturi?
      </p>
      <div style={{justifyContent: "space-between"}} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="em">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="emile" />{" "}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "25px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>{" "}
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="supmit">
            {state.submitting ? "submitting... " : "submit"}
          </button>
        </form>
        <div className="animation"><Lottie style={{height: 490}} animationData={emile} /> </div>
      </div>
    </section>
  );
};

export default Content;
