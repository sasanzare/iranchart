import { Link } from "react-router-dom";
export default function News() {
  return (
    <div className="container pt-5">
      <div className="row  mt-5">
        <div className="col-lg-9 col-12 pl-lg-5 pr-lg-1 ">
          <div className="bg-dark radius-10 shadow py-3 px-2 d-flex">
            <div>
              <h1 className="h6 text-white text-right ">
                تحلیل روزانه بازار‌های مالی
              </h1>
              <p className="text-white text-right mb-0">
                با ایران‌چارت، از اخبار معتبر بازارهای مالی ایران و جهان با خبر
                باشید.
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="col-lg-3 text-center  pl-0 mr-n5 pr-3">
          <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar  pb-2 position-sticky ">
            <img src="/image/logo.png" width="80%" className="pb-3 pt-2" />

            <p className="pb-2">
              تیم تخصصی ایران‌چارت با هدف آموزش در زمینه‌ی فارکس در تلاش است تا
              بهترین متد‌های بازار جهانی فارکس مخاطبان خود را آشنا ساخته و
              آموزش‌های کاملی را ارایه کند.
            </p>
            <Link
              className=" btn btn-block radius-10 cs-color cs-br-color "
              to="/courses"
            >
              دوره های آموزشی
            </Link>
            <Link
              className=" btn btn-block radius-10 cs-color cs-br-color "
              to="/#coins"
            >
              تقویم اقتصادی
            </Link>
          </div>
          <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar mt-3 pb-2 position-sticky ">
            <p className="pb-2 text-center text-green font-weight-bold">
              آخرین مقالات ایران چارت
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
