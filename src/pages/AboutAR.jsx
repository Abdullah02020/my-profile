import HeaderAR from "../componentsAR/1-HeaderAR/HeaderAR";
import FooterAR from "../componentsAR/FooterAR/FooterAR";
import MyAR from "../componentsAR/6-MyAR/MyAR";
import ExprienceAR from "../componentsAR/8-Exprience/ExprienceAR";
import ServersAR from "../componentsAR/9-Servers/ServersAR";
import TalkAR from "../componentsAR/5-TalkAR/TalkAR";
function AboutAR() {
  return (
    <div className="container">
      <HeaderAR />
      <MyAR />

      <ExprienceAR />
      <ServersAR />
      <TalkAR />
      <FooterAR />
    </div>
  );
}

export default AboutAR;
