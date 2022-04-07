import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeadset,faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";
function Course() {
  const { id } = useParams();

  let title = null;
  let level = null;
  let location = null;
  let image = null;
  let about = null;
  let description = null;
  let topic = null;
  let price = null;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(BASE_URL + "product/" + id).then((resp) => setCourse(resp.data));
  });

  if (course) {
    title = course.name;
    level = course.level;
    location = course.location;
    image = course.image;
    about = course.about;
    description = course.description.replace('src="/', 'src="' + BASE_URL);
    topic = course.topic.replace('src="/', 'src="' + BASE_URL);
    price = course.price;
  }
  return (
    <div className="Course">
      <div className="container pt-5">
        <div className="row  mt-5">
          <div className="col-lg-9 col-12 pl-lg-5 pr-lg-1">
            <div className="text-right p-3 shadow-sm radius-10">
              <Link to="/" className="ml-3">
                ایران چارت
              </Link>
              <span>&gt;</span>

              <Link to="/course" className="mr-3">
                {title}
              </Link>
            </div>
            <Link to={"/course/" + id}>
              <img
                className="w-100 radius-10 mt-3"
                height={450}
                src={image}
                alt={title}
              />
            </Link>
            <div
              className="text-center p-3 shadow-sm radius-10 mt-4 wrapper-articel"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <div
              className="text-center p-3 shadow-sm radius-10 mt-3  wrapper-articel"
              dangerouslySetInnerHTML={{ __html: topic }}
            ></div>
            <div className="row pt-4 mt-2 pb-3">
              <div className="col-md-4">
                <div className="shadow radius-10  d-flex align-items-center p-2">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="h4 text-green"
                  />
                  <div className="pr-2">
                    <p className="mb-0">سیسم آموزشی</p>
                    <span className="font-13">یادگیری عمیق و تخصصی</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shadow radius-10  d-flex align-items-center p-2">
                  <FontAwesomeIcon
                    icon={faHeadset}
                    className="h4 text-green"
                  />
                  <div className="pr-2">
                    <p className="mb-0">پشتیبانی</p>
                    <span className="font-13">تا بی‌نهایت</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="shadow radius-10  d-flex align-items-center p-2">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlassDollar}
                    className="h4 text-green"
                  />
                  <div className="pr-2">
                    <p className="mb-0">نتیجه</p>
                    <span className="font-13">کسب درآمد عالی</span>
                  </div>
                </div>
              </div>
              <div className="col-12 pt-4 mt-2">
              <Link to="/order" className="btn btn-block btn-green">ثبت نام دوره</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-center  pl-0 mr-n5 pr-3">
            <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar  pb-2  text-right">
              <p className="text-center">{title}</p>
              <hr />
              <span className="font-13">سطح دوره : {level}</span>
              <hr />
              <span className="font-13"> قیمت : {price}</span>
              <hr />
              <span className="font-13"> محل برگزاری : {location}</span>
              <hr />
              <Link
                className="btn btn-block radius-10 text-white btn-green"
                to="/order"
              >
                ثبت نام دوره
              </Link>
            </div>
            <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar  pb-2  text-right mt-4">
              <p className="text-center">درباره مدرس دوره</p>
              <p>{about}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
