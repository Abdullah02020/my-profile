import Header from "../components/1-header/Header";
import Footer from "../components/5-footer/Footer";
import My from "../components/6-My/my";

import Experience from "../components/7-Experience/experience";
import Services from "../components/8-Services/services";
import Talk from "../components/11-Talk/talk";
function about() {
  return (
    <div className="container">
      <Header />

      <My />

      <Experience />

      <Services />

      <Talk />

      <Footer />
    </div>
  );
}

export default about;
