import {Link} from "react-router-dom";
function Header() {
  return (
    <div className="Header">
         <nav className="navbar navbar-expand-lg navbar-light bg-white position-fixed w-100 pos-nav z-10 shadow  p-lg-0 pr-lg-3 pl-lg-3">
      <Link  id="req-consulting" className=" btn rounded-lg bg-green text-white  " to="tel:09365708700">مشاوره سریع<svg xmlns="http://www.w3.org/2000/svg" width="25.434" height="25.434" viewBox="0 0 25.434 25.434 " >
                          <g id="whatsapp-logo_icon-icons.com_57054" transform="translate(-1 -1)">
                            <path id="WhatsApp" d="M26.434,13.364c0,7.381-5.029,12.364-12.467,12.364a13.49,13.49,0,0,1-6.51-1.663L1,26.434l2.431-6.17a13.223,13.223,0,0,1-1.933-6.9C1.5,5.983,6.528,1,13.966,1S26.434,5.983,26.434,13.364ZM13.966,2.128A11.292,11.292,0,0,0,2.643,13.364,11.117,11.117,0,0,0,4.8,19.951L3.386,24.123,7.737,22.74a11.334,11.334,0,0,0,17.552-9.376A11.293,11.293,0,0,0,13.966,2.128Zm6.8,14.313c-.083-.136-.3-.219-.633-.382s-1.954-.957-2.256-1.065-.523-.164-.743.164-.853,1.065-1.046,1.284-.385.247-.715.083A9.036,9.036,0,0,1,12.72,14.9a9.876,9.876,0,0,1-1.837-2.268c-.192-.328-.02-.5.145-.668.149-.147.33-.383.5-.574a2.2,2.2,0,0,0,.33-.547.6.6,0,0,0-.027-.574c-.082-.164-.743-1.776-1.018-2.432l-.195-.349-.548-.2c-.192,0-.413-.027-.633-.027a1.218,1.218,0,0,0-.881.41A3.663,3.663,0,0,0,7.4,10.4a6.338,6.338,0,0,0,1.348,3.387c.165.218,2.283,3.633,5.639,4.945s3.356.874,3.962.819A3.339,3.339,0,0,0,20.575,18,2.731,2.731,0,0,0,20.767,16.441Z" fill="#fff"/>
                          </g>
                        </svg>
        </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">

          <div className="col-12 p-0" dir="rtl">

            <ul className="navbar-nav mr-auto text-right justify-content-lg-center pr-lg-5 pr-2  d-lg-flex d-none ">

              <li  className="nav-item position-absolute li-logo">
                <Link className="nav-link p-0 pt-3" to="/">
                  <img src="./image/logo.png"/>
                </Link>
              </li>
                           
              <li className="dropdown">
                <Link to="htps://iranchart.net/quiz" className="dropbtn bg-white border-0 d-block">کوییز</Link>
          
              </li>
    
             
              <li className=" dropdown ">
                <Link className="dropbtn bg-white border-0 d-block" to="https://iranchart.net/courses" >دوره های آموزشی</Link>
               
                 </li><li className=" dropdown ">
                <Link className="dropbtn bg-white border-0 d-block" to="https://iranchart.net/daily-trade" >تحلیل روزانه</Link>
               
                 </li>
                 <li className=" dropdown ">
                  <Link className="dropbtn bg-white border-0 d-block" to="https://iranchart.net/Economic-calendar" >تقویم اقتصادی</Link>
                 
                   </li>
                   <li className=" dropdown ">
                        <Link className="dropbtn bg-white border-0 d-block" to="/articles" >مجله ایران چارت</Link>
                       
                         </li>
               
                     <li className=" dropdown ">
                      <Link className="dropbtn bg-white border-0 d-block" to="/contact-us" >ارتباط با ما</Link>
                     
                       </li>
                       <li className=" dropdown ">
                    <Link className="dropbtn bg-white border-0 d-block" to="/about-us" >درباره ما</Link>
                   
                     </li>
                    
            </ul>
            <ul className="navbar-nav mr-auto text-right justify-content-lg-center pr-2 pt-3  d-lg-none">
              <li className="nav-item">
                <Link className="nav-link" to="/">خانه</Link>
              </li>
             
              <li className="nav-item" >
                  <Link className="nav-link" to="/">
                    دوره های آموزشی
                  </Link>
                </li>
             
              <li className="nav-item">
                  <Link className="nav-link" to="/">
                    تحلیل روزانه
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/">
                تقویم اقتصادی
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  درباره ما
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
        ارتباط با ما
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/articles">
      مجله ایران چارت
            </Link>
        </li>
          
              <li className="nav-item text-center">
                  <Link className="nav-link p-0 pt-2" to="/">
                    <img max-width="50%" src="./image/logo.png"/>
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



