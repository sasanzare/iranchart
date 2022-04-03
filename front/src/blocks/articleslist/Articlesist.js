import Articlecard from "../../components/articlecard/Articlecard";
import axios from 'axios';
import {useState, useEffect} from 'react'
function Articleslist() {
  
    let content = null;
    const [articles, setArticles] = useState(null);

    useEffect( ()=>{
        axios.get('http://localhost:8000/api/v1/')
        .then(resp =>setArticles(resp.data))
    },[]);

    if(articles) {
        content = articles.map((article) => <Articlecard url={article.id} key={article.id} thumbnail={article.thumbnail} title={article.title} content={article.body}/>);       
    }
    return(
        <div className="Articleslist row pb-5"> 
            {content}  
        </div>
    );
}
export default Articleslist;