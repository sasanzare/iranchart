import Articleslist from "../../blocks/articleslist/Articlesist";
import Articlecontent from "../../components/articlecontent/Articlecontent";
import Comment from "../../blocks/Comment/Comment";
import {Link,useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();
  return (
    <div className="Article">
      <div className="container pt-5">
        <div className="row  mt-5">
          <div className="col-lg-9 col-12 pl-lg-5 pr-lg-1">
            <Articlecontent id={id} />
            <Comment id={id}/>
          </div>
          <div className="col-lg-3 text-center  pl-0 mr-n5 pr-3">
            <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar  pb-2 position-sticky ">
              <img src="/image/logo.png" width="80%" className="pb-3 pt-2" />

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
              <a
                className=" btn btn-block radius-10 cs-color cs-br-color "
                href="=#"
              >
                ثبت نام بروکر
              </a>
              <Link
                className=" btn btn-block radius-10 cs-color cs-br-color "
                to="/quizzes"
              >
                کوییز
              </Link>
            </div>
          </div>
          <h5 className="text-center pb-3 pt-5 mt-3  col-12">مقالات مشابه</h5>
        </div>
        <Articleslist />
      </div>
    </div>
  );
}

export default Article;
