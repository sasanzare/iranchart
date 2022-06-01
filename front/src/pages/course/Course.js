import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faHeadset,
  faMagnifyingGlassDollar,
  faDoorOpen,
  faLocation,
  faCartPlus,
  faMoneyBill
  
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../../components/loading/Loading";
import UseDocumentTitle from "../../components/useDocumentTitle/UseDocumentTitle";
export default function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  // description = course.description.replace('src="/', 'src="' + BASE_URL);
  // topic = course.topic.replace('src="/', 'src="' + BASE_URL);

  const getCourse = async () => {
    const { data } = await axios.get(BASE_URL + "product/" + id);
    setCourse(data);
    UseDocumentTitle({
      title: data.name,
      metaDescription: data.descriptionTag
    })
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <div className="Course">
      <div className="container py-5">
        <div className="row  mt-5">
          <div className="col-lg-9 col-12 pl-lg-5 pr-lg-1">
            <div className="text-right p-3 shadow-sm radius-10">
              <Link to="/" className="ml-3">
                ایران چارت
              </Link>
              <span>&gt;</span>
              {course.length !== 0 ? (
                <Link to={"/course/" + id} className="mr-3">
                  {course.name}
                </Link>
              ) : (
                <Loading />
              )}
            </div>
            {course.length !== 0 ? (
              <Link to={"/course/" + course.id}>
                <img
                  className="w-100 radius-10 mt-3"
                  height={450}
                  src={course.image}
                  alt={course.name}
                />
              </Link>
            ) : (
              <Loading />
            )}
            {course.length !== 0 ? (
              <div
                className="text-center p-3 shadow-sm radius-10 mt-4 wrapper-articel"
                dangerouslySetInnerHTML={{ __html: course.description }}
              ></div>
            ) : (
              <Loading />
            )}
            {course.length !== 0 ? (
              <div
                className="text-center p-3 shadow-sm radius-10 mt-3  wrapper-articel"
                dangerouslySetInnerHTML={{ __html: course.topic }}
              ></div>
            ) : (
              <Loading />
            )}

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
                  <FontAwesomeIcon icon={faHeadset} className="h4 text-green" />
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
                <Link to="/order" className="btn btn-block btn-green">
                  ثبت نام دوره
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-center  pl-0 mr-n5 pr-3">
            <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar  pb-2  text-right">
              {course.length != 0 ? (
                <div>
                  <p className="text-center">{course.name}</p>
                  <hr />
                  <FontAwesomeIcon className="ml-2 text-secondary" icon={faDoorOpen} />
                  <span className="font-13 ">سطح دوره : {course.level}</span>
                  <hr />
                  <FontAwesomeIcon className="ml-2 text-secondary" icon={faMoneyBill} />
                  <span className="font-13"> قیمت : {course.price}</span>
                  <hr />
                  <FontAwesomeIcon className="ml-2 text-secondary" icon={faLocation} />
                  <span className="font-13">
                    {" "}
                    محل برگزاری : {course.location}
                  </span>
                  <hr />
                </div>
              ) : (
                <Loading />
              )}

              <Link
                className="btn btn-block radius-10 text-white btn-green"
                to="/order"
              >
                ثبت نام دوره
              </Link>
            </div>

            <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar  pb-2  text-right mt-4">
              <p className="text-center">درباره مدرس دوره</p>

              {course.length != 0 ? <p>{course.about}</p> : <Loading />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


