import Faqlist from "../../components/faqlist/Faqlist";
import { Link } from "react-router-dom";
import UseDocumentTitle from "../../components/useDocumentTitle/UseDocumentTitle";
function Faq() {
  UseDocumentTitle({
    title: 'سوالات متداول',
      metaDescription: 'ایران چارت | با تنوع پرسش و پاسخ هایی که در ایرانچارت با آن مواجه میشوید به تمامی سوالات خود در زمینه ی فارکس اعم از ثبت نام،نحوه ی ورود به بازار،اسپرد،سویاپ و... پاسخ خواهید گرفت.'
  })
  return (
    <div className="Faq">
      <div className="container pt-5">
        <div className="row  mt-5 pb-5">
          <div className="col-lg-9 col-12 pl-lg-5 pr-lg-1">
            <div className="text-right p-3 shadow-sm radius-10">
              <Link to="/" className="ml-3">
                ایران چارت
              </Link>
              <span>&gt;</span>

              <Link to="/faq" className="mr-3">
                سوالات متداول
              </Link>
            </div>
            <div className="text-center p-3 shadow-sm radius-10 mt-3 wrapper-articel">
              <h1 className="h5 text-center pb-3">
                سوالات متداول سامانه ایران چارت
              </h1>
              <div className="row ">
                <div className="col-12">
                  <Faqlist />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-center  pl-0 mr-n5 pr-3">
            <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar  pb-2 position-sticky ">
              <img src="./image/logo.png" width="80%" className="pb-3 pt-2" />

              <p className="pb-2">
                تیم تخصـــصی ایرانچارت با هدف آمـــــوزش در زمیــنه ی
                فارکــــــس در تلاش اســـت تا بهـترین متد های بـازار جهانی فارکس
                مخاطبان خـود را آشنا ساخته و آمــوزش های کاملی را ارئه کنــــد
              </p>
              <Link
                className=" btn btn-block radius-10 cs-color cs-br-color "
                to="/courses"
              >
                دوره های آموزشی
              </Link>
              <Link
                className=" btn btn-block radius-10 cs-color cs-br-color "
                to="/news"
              >
                تحلیل روزانه
              </Link>
              {/* <a
                className=" btn btn-block radius-10 cs-color cs-br-color "
                href="/#coins"
              >
                تقویم اقتصادی
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
