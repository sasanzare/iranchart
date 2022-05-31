import { Link } from "react-router-dom";
import NewsList from "../../blocks/newsList/NewsList";
import LatestArticles from "../../components/latestArticles/LatestArticles";
import Chart from './News.svg'
import UseDocumentTitle from "../../components/useDocumentTitle/UseDocumentTitle";
export default function News() {
  UseDocumentTitle({
    title: 'تحلیل روزانه',
      metaDescription: 'ایران چارت | Iranchart.net'
  })
  return (
    <div className="container py-5">
      <div className="row  mt-5">
        <div className="col-lg-9 col-12 pl-lg-5 pr-lg-1 pb-5">
          <div className="bg-dark radius-10 shadow py-3 px-2 d-flex align-items-center">
            <div className="col-10">
              <h1 className="h6 text-white text-right ">
                تحلیل روزانه بازار‌های مالی
              </h1>
              <p className="text-white text-right mb-0">
                با ایران‌چارت، از اخبار معتبر بازارهای مالی ایران و جهان با خبر
                باشید.
              </p>
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center">
              <img src={Chart} alt="Chart" />
            </div>
          </div>
          <NewsList />
        </div>

        <div className="col-lg-3 text-center  pl-0 mr-n5 pr-3">
          <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar  pb-2 ">
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
          <LatestArticles />
        </div>
      </div>
    </div>
  );
}
