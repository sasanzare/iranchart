import Articleslist from "../../blocks/articleslist/Articlesist";
import Articlecontent from "../../components/articlecontent/Articlecontent";
import { useParams } from "react-router-dom";
function Article() {
  const { id } = useParams();
  return (
    <div className="Article">
      <div className="container pt-5">
        <div className="row  mt-5">
          <Articlecontent id={id} />

          <div className="col-lg-3 text-center  pl-0 mr-n5 pr-3">
            <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar  pb-2 position-sticky ">
              <img src="/image/logo.png" width="80%" className="pb-3 pt-2" />

              <p className="pb-2">
                تیم تخصـــصی ایرانچارت با هدف آمـــــوزش در زمیــنه ی
                فارکــــــس در تلاش اســـت تا بهـترین متد های بـازار جهانی فارکس
                مخاطبان خـود را آشنا ساخته و آمــوزش های کاملی را ارئه کنــــد
              </p>
              <a
                className=" btn btn-block radius-10 cs-color cs-br-color "
                href="https://iranchart.net/courses"
              >
                دوره های آموزشی
              </a>
              <a
                className=" btn btn-block radius-10 cs-color cs-br-color "
                href="https://iranchart.net/daily-trade"
              >
                تحلیل روزانه
              </a>
              <a
                className=" btn btn-block radius-10 cs-color cs-br-color "
                href="https://iranchart.net/Economic-calendar"
              >
                تقویم اقتصادی
              </a>
              <a
                className=" btn btn-block radius-10 cs-color cs-br-color "
                href="https://iranchart.net"
              >
                ثبت نام بروکر
              </a>
              <a
                className=" btn btn-block radius-10 cs-color cs-br-color "
                href="htps://iranchart.net/quiz"
              >
                کوییز
              </a>
            </div>
          </div>
          <h5 className="text-center pb-3 pt-5 mt-3  col-12">مقالات مشابه</h5>
        </div>
        <Articleslist  />
      </div>
    </div>
  );
}

export default Article;
