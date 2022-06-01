import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function Header() {
  function closeNav(){
     document.getElementById("navbarSupportedContent").classList.remove("show");
  }
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white position-fixed w-100 pos-nav z-10 shadow  p-lg-0 pr-lg-3 pl-lg-3">
        <a
          className=" btn rounded-lg  text-white btn-green d-flex align-items-center p-0 px-2"
          href="tel:09365708700"
        >
          <span className="ml-1">مشاوره سریع</span>
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-white h5 mt-2 p-0 btn-green radius-10"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <div className="col-12 p-0" dir="rtl">
            <ul className="navbar-nav mr-auto text-right justify-content-lg-center pr-lg-5 pr-2  d-lg-flex d-none ">
              <li className="nav-item position-absolute li-logo">
                <Link className="nav-link p-0 pt-3" to="/">
                  <img src="/image/logo.png" width={120} />
                </Link>
              </li>

              <li className="dropdown">
                <Link
                  to="/quizzes"
                  className="dropbtn bg-white border-0 d-block"
                >
                  کوییز
                </Link>
              </li>

              <li className=" dropdown ">
                <Link
                  className="dropbtn bg-white border-0 d-block"
                  to="/courses"
                >
                  دوره های آموزشی
                </Link>
              </li>
              <li className=" dropdown ">
                <Link className="dropbtn bg-white border-0 d-block" to="/news">
                  تحلیل روزانه
                </Link>
              </li>
              {/* <li className=" dropdown ">
                <a className="dropbtn bg-white border-0 d-block" href="/#coins">
                  تقویم اقتصادی
                </a>
              </li> */}
              <li className=" dropdown ">
                <Link
                  className="dropbtn bg-white border-0 d-block"
                  to="/articles"
                >
                  مجله ایران چارت
                </Link>
              </li>

              <li className=" dropdown ">
                <Link
                  className="dropbtn bg-white border-0 d-block"
                  to="/contact-us"
                >
                  ارتباط با ما
                </Link>
              </li>
              <li className=" dropdown ">
                <Link
                  className="dropbtn bg-white border-0 d-block"
                  to="/about-us"
                >
                  درباره ما
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto text-right justify-content-lg-center pr-2 pt-3  d-lg-none">
              <li className="nav-item">
                <Link className="nav-link" onClick={closeNav} to="/">
                  خانه
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={closeNav} to="/quizzes">
                  کوییز
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" onClick={closeNav} to="/courses">
                  دوره های آموزشی
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" onClick={closeNav} to="/news">
                  تحلیل روزانه
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/#coins">
                  تقویم اقتصادی
                </a>
              </li> */}
             
            
              <li className="nav-item">
                <Link className="nav-link" onClick={closeNav} to="/articles">
                  مجله ایران چارت
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={closeNav} to="/faq">
 سوالات متداول
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={closeNav} to="/contact-us">
                  ارتباط با ما
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={closeNav} to="/about-us">
                  درباره ما
                </Link>
              </li>

              <li className="nav-item text-center">
                <Link className="nav-link p-0 pt-2" to="/">
                  <img max-width="50%" src="./image/logo.png" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
