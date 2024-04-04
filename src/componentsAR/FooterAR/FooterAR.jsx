import "./FooterAR.css";
const FooterAR = () => {
  return (
    <footer className="flex">
      <p>© 2024 Spencer Sharp. Designed by <span> <a href="">Abdullah Mohammed</a></span>.</p>
      <ul className="flex">
        <li>
        <div className="icon icon-instagram"></div>
        </li>
        <li>
        <div className="icon icon-linkedin-square"></div>
        </li>
        <li>
        <div className="icon icon-github"></div>
        </li>
        <li>
          <a href=""><div className="icon icon-twitter"></div></a>
        </li>
        <li>
          <a href="/">EN</a>
        </li>
        
        
      </ul>
    </footer>
  );
};

export default FooterAR;
