import Header from "../components/1-header/Header";
import Footer from "../components/5-footer/Footer";

import Content from "../components/4-content/Content";
function conecct() {
  return (
    <div className="container">
      <Header />
      <Content />
      <div className="line" />
      <Footer />
    </div>
  );
}

export default conecct;
