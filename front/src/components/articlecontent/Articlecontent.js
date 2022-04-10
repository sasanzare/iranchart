import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Newsletter from "../newsletter/Newsletter";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
import Loading from "../loading/Loading";

export default function Articlecontent(props) {
  const [article, setarticle] = useState([]);
  //     content = article.body.replace('src=\"/', 'src="' + BaseURLBack);
 
  const getArticle = async () => {
    const { data } = await axios.get(BASE_URL + props.id);
    setarticle(data);
  };

  useEffect(() => {
    getArticle();
  }, [props.id]);

  return (
    <div className="Articlecontent col-lg-9 col-12 pl-lg-5 pr-lg-1">
      <div className="text-right p-3 shadow-sm radius-10">
        <Link to="/" className="ml-3">
          ایران چارت
        </Link>
        <span>&gt;</span>
        {article.length !== 0 ? (
          <Link to={"/article/" + props.id} className="mr-3">
            {article.title}
          </Link>
        ) : (
          <Loading />
        )}
      </div>

      <div className="text-center p-3 shadow-sm radius-10 mt-3 wrapper-articel">
        {article.length !== 0 ? (
          <div>
            <h1 className="h5 text-center pb-3">{article.title}</h1>
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-100"
            />
            <div
              className="text-justify pb-3 pt-3"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>
          </div>
        ) : (
          <Loading />
        )}

        <Newsletter />
      </div>
    </div>
  );
}
