import Articleslist from "../../blocks/articleslist/Articlesist";
import CourseList from "../../blocks/courseList/CourseList";
function Home() {
  return (
    <div className="Home">
      <div className="container pt-5">
        <div className="row pt-5">
          <h5 className="text-center pb-3 col-12">
            در بروکر دلخواهتان مطمئن ثبت نام کنید
          </h5>
          <div className="col-md-4 col-12 pb-4  d-flex justify-content-md-start justify-content-center ">
            <div className="col-12 pr-0 pl-0 bg-white text-center trborder pb-4">
              <img
                src="./image/liteforex.png"
                alt="liteforex"
                className="d-block pb-5 m-auto pt-4 "
              />

              <a className="m-auto text-center " href="https://iranchart.net">
                <button type="button" className="btn whitebtn text-center ">
                  ثبت نام بروکر
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-12 pb-4  d-flex justify-content-md-start justify-content-center ">
            <div className="col-12 pr-0 pl-0 bg-white text-center r50 pb-4 ">
              <img
                src="./image/fibo.png"
                alt="liteforex"
                className="d-block pb-5 m-auto pt-4 "
              />

              <a className="m-auto text-center " href="https://iranchart.net">
                <button type="button" className="btn whitebtn text-center ">
                  ثبت نام بروکر
                </button>
              </a>
            </div>
          </div>
          <div className=" col-md-4 col-12 pb-4  d-flex justify-content-md-start justify-content-center  ">
            <div className="col-12 pr-0 pl-0 bg-white text-center tlborder pb-4">
              <img
                src="./image/amarket.png"
                alt="liteforex"
                className="d-block pb-5 m-auto pt-4"
              />

              <a className="m-auto text-center " href="https://iranchart.net">
                <button type="button" className="btn whitebtn text-center ">
                  ثبت نام بروکر
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-12 pb-4  d-flex justify-content-md-start justify-content-center ">
            <div className="col-12 pr-0 pl-0 bg-white text-center blborder pb-4">
              <img
                src="./image/alpari.png"
                alt="liteforex"
                className="d-block pb-5 m-auto pt-4 "
              />

              <a className="m-auto text-center " href="https://iranchart.net">
                <button type="button" className="btn whitebtn text-center ">
                  ثبت نام بروکر
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-12 pb-4  d-flex justify-content-md-start justify-content-center ">
            <div className="col-12 pr-0 pl-0 bg-white text-center r50 pb-4 ">
              <img
                src="./image/windsor.png"
                alt="liteforex"
                className="d-block pb-5 m-auto pt-4 "
              />

              <a className="m-auto text-center " href="https://iranchart.net">
                <button type="button" className="btn whitebtn text-center ">
                  ثبت نام بروکر
                </button>
              </a>
            </div>
          </div>
          <div className=" col-md-4 col-12 pb-4  d-flex justify-content-md-start justify-content-center  ">
            <div className="col-12 pr-0 pl-0 bg-white text-center brborder pb-4">
              <img
                src="./image/alpari.png"
                alt="liteforex"
                className="d-block pb-5 m-auto pt-4"
              />

              <a className="m-auto text-center " href="https://iranchart.net">
                <button type="button" className="btn whitebtn text-center ">
                  ثبت نام بروکر
                </button>
              </a>
            </div>
          </div>

          <h5 className="col-12 text-center pb-3 pt-4">
            رشد شما با یادگیری آغاز میشود
          </h5>
        </div>
        <CourseList />
        <div className="row">
          <div className="col-12 pt-5">
            <img className="w-100" src="./image/nemoodar.jpg" alt="iranchart" />
          </div>
          <div className="col-12 pt-4">
            <img src="./image/api.jpg" alt="iranchart" className="pt-5 w-100" />
          </div>

          <h5 className="col-12 text-center pb-4  pt-5">
            با مطالعه مجله ایران چارت همیشه بروز باشید
          </h5>
        </div>
        <Articleslist />
      </div>
    </div>
  );
}

export default Home;
