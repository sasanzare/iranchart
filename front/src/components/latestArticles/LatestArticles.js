import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
import Loading from "../loading/Loading";

export default function LatestArticles() {
  const L_ARTICLES_URL = BASE_URL + "?ordering=-created";
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    const { data } = await axios.get(L_ARTICLES_URL);
    setArticles(data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar mt-3 pb-2 text-right">
      <p className=" text-center text-green font-weight-bold">
        آخرین مقالات ایران چارت
      </p>
      {articles.length > 0 ? (
        articles.map((item) => (
          <Link
            key={item.id}
            className="d-block font-14 pb-2"
            to={"/article/" + item.id}
          >
            {item.title}
          </Link>
        ))
      ) : (
        <Loading/>
      )}
    </div>
  );
}
