import Articlecard from "../../components/articlecard/Articlecard";
import axios from "axios";
import { useState, useEffect } from "react";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
import Loading from "../../components/loading/Loading";

function Articleslist() {
  const [articles, setArticles] = useState([]);
  const articles_URL = BASE_URL + "?ordering=-created";

  const getArticles = async () => {
    const { data } = await axios.get(articles_URL);
    setArticles(data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="Articleslist row pb-5">
      {articles.length > 0 ? (
        articles.map((article) => (
          <Articlecard
            url={article.id}
            key={article.id}
            thumbnail={article.thumbnail}
            title={article.title}
            content={article.body}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
export default Articleslist;
