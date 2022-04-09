import { useState,useEffect } from "react";
import axios from "axios";
import NewsCard from "../../components/newsCaed/NewsCard";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
import Loading from "../../components/loading/Loading";
export default function NewsList(){

  const NEWS_URL = BASE_URL + "news/";

  const [news, setNews] = useState([]);
  const getNews = async () => {
    const { data } = await axios.get(NEWS_URL);
    setNews(data);
  };

  useEffect(() => {
    getNews();
  }, []);

    return(
        <div className="NewsList pt-3">
            {news.length > 0 ? (
                news.map((item)=>(
                    <NewsCard key={item.id} title={item.title} data={item.date}  content={item.content} />
                ))
           
        ):(
            <Loading />
        )}
        </div>
        
            
    );
}