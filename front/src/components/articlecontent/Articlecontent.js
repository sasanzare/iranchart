import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function Articlecontent(props) {
    const BaseURLBack = 'http://localhost:8000'
    let title = null;
    let image = null;
    let content = null;
    const [article, setarticle] = useState(null);

    useEffect( ()=>{
        axios.get('http://localhost:8000/api/v1/'+props.id)
        .then(resp =>setarticle(resp.data))
    },[props.id]);

    if(article){  
        title = article.title;    
        image = article.thumbnail;   
      content = article.body;
      let src = content.split(' src=\"')[1].split(/[ \"]/)[0];
      content = content.replace(src, BaseURLBack + src);
    }
  return (
      <div className="Articlecontent col-lg-9 col-12 pl-lg-5 pr-lg-1">
        <div className="text-right p-3 shadow-sm radius-10">
          <Link to="/" className="ml-3">
            ایران چارت
          </Link>
          <span>&gt;</span>

          <Link to={"/article/"+props.id} className="mr-3">
            عنوان این مقاله
          </Link>
        </div>

        <div className="text-center p-3 shadow-sm radius-10 mt-3 wrapper-articel">
          <h1 className="h4 text-center pb-3">{title}</h1>
          <img
            src={image}
            alt={title}
            className="w-100"
          />
          <div className="text-justify pb-3 pt-3" dangerouslySetInnerHTML={{ __html: content }}>
          
          </div>

          <div className=" col-12 r15 text-center ">
            <p className="cs-color text-center mt-1">
              برای دریافت رایگان ویدیوی آموزشی آشنایی با دنیای ارز های دیجیتال
              ایمیل خود را وارد کنین وبلافاصــــله لینک های دانلود را دریافت
              نمایید
            </p>
            <form className=" justify-content-center" action="/action_page.php">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
              <button
                type="submit"
                className="btn btn-success mt-2 mb-2 col-lg-4 col-md-5 col-sm-6"
              >
                ارسال
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Articlecontent;
