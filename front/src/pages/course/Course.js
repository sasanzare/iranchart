import {Link} from "react-router-dom"
import { useState,useEffect } from "react";
import axios from 'axios'
function Course() {
  const BaseURLBack = 'http://localhost:8000/'
  let title = null;
  let image = null;
  let content = null;
  const [article, setarticle] = useState(null);

  useEffect( ()=>{
      axios.get('http://localhost:8000/api/v1/')
      .then(resp =>setarticle(resp.data))
  });

  if(article){  
      // title = article.title;    
      // image = article.thumbnail;   
      // content = article.body.replace('src=\"/', 'src="' + BaseURLBack);
  }
  return (
    <div className="Course">
      <div className="container pt-5">
        <div className="row  mt-5">
          <div className="col-lg-9 col-12 pl-lg-5 pr-lg-1">
            <div className="text-right p-3 shadow-sm radius-10">
              <a href="https://iranchart.net" className="ml-3">
                ایران چارت
              </a>
              <span>&gt;</span>

              <a href="https://iranchart.net" className="mr-3">
                سوالات متداول
              </a>
            </div>
            <img className="w-100 radius-10 mt-3" src="./image/course.png" />
            <div className="text-center p-3 shadow-sm radius-10 mt-3 wrapper-articel">
              <p>
                گرافیک است عرض ادب و احترام ویژه گروه آموز ایرانچارت به
                تـــــــمامی دوستان عزیز و همراهان همیشگی،امیدواریم که هر جایی
                که .هستید حال دلتون خوب باشه شاید ابتدا اص قصدی برای تهیه ی این
                دوره ی آموز نداشــــــــتیم،اما وقتی که توی اینستا و شبکه های
                اجتماعی آموزش های بع از دوستان رو دیدیم،تصمیم جدی گرفتیم که با
                ارائه ی این دوره های آموزشـــی درگمی و کفگی تحلیل رو از
                کســــــــــــــانی که عقمند به بازار های مالی به ویژه فارکس
                هستند رو برطرف کنیم.همونـــــــطوری که همه ی شما دوستان
                میدونید،دنیای تریدینگ دنیای بسیار بزرگ و جذابیه،خصوصا دنیای
                فارکس که بزرگترین ب
              </p>
            </div>
            <div className="text-center p-3 shadow-sm radius-10 mt-3 wrapper-articel">
              <p>
                گرافیک است عرض ادب و احترام ویژه گروه آموز ایرانچارت به
                تـــــــمامی دوستان عزیز و همراهان همیشگی،امیدواریم که هر جایی
                که .هستید حال دلتون خوب باشه شاید ابتدا اص قصدی برای تهیه ی این
                دوره ی آموز نداشــــــــتیم،اما وقتی که توی اینستا و شبکه های
                اجتماعی آموزش های بع از دوستان رو دیدیم،تصمیم جدی گرفتیم که با
                ارائه ی این دوره های آموزشـــی درگمی و کفگی تحلیل رو از
                کســــــــــــــانی که عقمند به بازار های مالی به ویژه فارکس
                هستند رو برطرف کنیم.همونـــــــطوری که همه ی شما دوستان
                میدونید،دنیای تریدینگ دنیای بسیار بزرگ و جذابیه،خصوصا دنیای
                فارکس که بزرگترین ب
              </p>
            </div>
          </div>
          <div className="col-lg-3 text-center  pl-0 mr-n5 pr-3">
            <div className="shadow-sm radius-10 p-2 pr-3 pl-3 sidebar  pb-2 position-sticky">
              <p>دوره اموزسی اصغر</p>
              <hr/>
            <span>سطح دوره</span>
             
              <Link
                className="btn btn-block radius-10 text-white btn-green"
                to="/order"
              >
                ثبت نام دوره
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
