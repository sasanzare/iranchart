function Articlecard(props) {
  return (
    <div className="Articlecard col-md-4 pb-md-4 pb-5">
      <div className="col-12 pr-0 pl-0 shadow  bg-white radius-15 overflow-hidden card-article">
        <a href="">
          <img src={props.thumbnail} height="180px" className="w-100 " alt={props.title} />
        </a>
        <h6 className="text-center f-aviny font-17 mt-4">{props.title}</h6>
        <hr className="cs-br-color" width="80%" />
        <div className=" pt-1 pb-1 pr-lg-3 pl-lg-3 pr-md-3 pl-md-2  pl-4 pr-4 d-flex justify-content-between">
          <p>
          {props.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Articlecard;
