import { Link } from "react-router-dom";

function CourseCard(props) {
  return (
    <div className="CourseCard col-md-4 pb-md-4 pb-5">
      <div className="col-12 pr-0 pl-0 shadow  bg-white radius-15 overflow-hidden card-article">
          <img src={props.thumbnail} className="w-100" height={200} alt={props.title} />
          <h6 className="text-center f-aviny px-2 font-14 font-weight-bold text-truncate mt-4">{props.title}</h6>
          <hr />
          <div className="pb-3 m-auto text-center">
            <Link className="m-auto btn whitebtn  " to={"/course/" + props.url}>
                مشاهده بیشتر
            </Link>
          </div>
      </div>
    </div>
  );
}

export default CourseCard;
