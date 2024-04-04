import { useState } from "react";
import "./Header.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const HeaderAR = () => {
  const [showModel, setshowModel] = useState(false);
  const [them, setthem] = useState("dark");
  useEffect(() => {
    if (them === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [them]);
  return (
    <header
      style={{ direction: "ltr" }}
      onClick={() => {
        //send value to ls
        localStorage.setItem("curentMode", them === "dark" ? "light" : "dark");

        //get value from ls
        setthem(localStorage.getItem("curentMode"));
      }}
      className="flex"
    >
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="menu icon-menu flex"
      ></button>
      <div className="flex header-img">
        <img src="./about-page.png" alt="" />
        <div className="text">
          <h1>Abdullah Mohammed</h1>
          <p>webdesinger</p>
        </div>
      </div>
      <div className="flex">
        <nav>
          <ul className="flex">
            {" "}
        
        
          
            <li>
              <Link to="/conecctAR">لنتواصل</Link>
            </li>{" "}
        
        
            <li>
              <Link to="/PrpjectsAR">أعمالي</Link>
            </li>
            <li>
              <Link to="/AboutAR">من أنا؟</Link>
            </li>{" "}
            <li>
              <Link to="/AR">الصفحة الرئيسية</Link>
            </li>{" "}
          </ul>
        </nav>
        <button className="mode flex">
          <span className="icon-moon-o" />
        </button>
      </div>

      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModel(false);
                }}
              />
            </li>
            <li>
              <Link to="/AR">الصفحة الرئيسية</Link>
            </li>{" "}
        
        
            <li>
              <Link to="/AboutAR">من أنا؟</Link>
            </li>{" "}
            <li>
              <Link to="/PrpjectsAR">أعمالي</Link>
            </li>
    
            <li>
              <Link to="/conecctAR">لنتواصل</Link>
            </li>{" "}
          </ul>
        </div>
      )}
    </header>
  );
};

export default HeaderAR;
