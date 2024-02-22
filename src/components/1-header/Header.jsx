import { useState } from "react";
import "./header.css";
import { useEffect } from "react";
const Header = () => {
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
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">articles</a>
          </li>
          <li>
            <a href="">projects</a>
          </li>
          <li>
            <a href="">speaking</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </nav>
      <button className="mode flex">
        <span className="icon-moon-o" />
      </button>

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
              <a href="home">about</a>
            </li>
            <li>
              <a href="">articles</a>
            </li>
            <li>
              <a href="">projects</a>
            </li>
            <li>
              <a href="">speaking</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
