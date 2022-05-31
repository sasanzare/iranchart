import UseDocumentTitle from "../../components/useDocumentTitle/UseDocumentTitle";
export default function About() {
  UseDocumentTitle({
    title: 'درباره ما',
      metaDescription: ' درباره ما| ایران چارت'
  })
  return (
    <div className="About">
      <div className="container pt-5">
        <div className="row pt-5">
          <h1 className="col-12 text-center ">درباره ما</h1>
          <p className="col-md-6 col-12">
            تیم آموزشی ایرانچارت همیشه در تلاش بوده تا مخاطبین خود را با
            بهترین،ساده ترین و کاربردی ترین مفاهــیم فارکس آشنا کند و داشته های
            خود را که حاصل سال ها فعالیت و تجربه بوده را به صورت رایگان در
            اختــــــیار آن ها قرار دهد.از آنجــــایی که ردپای افراد سودجو در
            اکثریت کسب و کار ها مشهود است،ما در تلاش هســــتیم تا بتوانیم به
            بهترین شکل ممـــــــکن،آموزش های لازم و کاربردی در جهت بهبود عملکرد
            شما برای ورود به دنیای تریدینگ فارکس را خدمت شما عزیزان ارائه کنیم.
            امروزه زندگی اکثریت افراد جامعه،کم و بیش با بازار های مالی گره خورده
            و کمتر کسی را در اطراف خود میبـینیم که دستی در این بازار نداشته
            باشند و در مرورگر های خود به دنبال آمــــوزش دیدن و آشنایی بیشتر
            برای ورود به این بازار هستند.اگر بخواهیم صادقــــــــــانه بگوییم
            ابتدا به فکــــــر تهیه ی دوره های آموزشی نبودیم و صرفا با آموزش های
            متنی به فکر ارتقای سطح اطلاعات مخاطبین خود بودیم ولی رفته رفته با
            دیدن آمــــــوزش های بی سر و ته از بقیه ی کانال ها و پیج های آموزشی،
            به این فکر افتادیم ، تا یــــــک دوره جامع از آموزش فارکس را برای
            مخاطبین خود تهیه کنیم و در اختیارشان قرار دهیم تا به صورت یکجا و پی
            در پی در مسیر آموزش قرار بگیرند و کلافگی تحلیل را از کسانی که
            علاقمند به بازار های مالی هستند را برطرف کنیم. ایرانچارت با بررسی
            موضوعاتی که حس کرد دغدغه ی افراد در این مسیر بوده است،به این نتیجه
            رسید که تمامی اطلاعات و دانش خودش را با یک چهارچوب خاص،در اختیار
            مخاطبین قرار دهد
          </p>

          <img src="./image/about.png" className=" col-md-6 col-12" alt="" />
        </div>
      </div>

      <div className="container">
        <p className="h4 text-green">ایران چارت را بهتر بشناسید ! </p>
        <video className="rounded-lg" width="100%" height="auto" controls poster="image/need.png">
          <source src="./video/myVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mt-4 ">
        <div className="row ">
          <div className=" col-md-4 col-12 pb-4  d-flex justify-content-md-start justify-content-center  ">
            <div className="col-12 pr-0 pl-0 bg-white text-center trborder pb-3">
              <img
                src="./image/icon1.png"
                alt="liteforex"
                className="d-block pb-3 m-auto pt-4"
              />
              <p className="px-3">
              ایرانچارت با هدف آموزش در زمینه ی فارکس و از بین بردن دغدغه اصلی و عمده ی معامله گران در بازار جهانی که عدم تمرکز برروی یک شیوه ی معاملاتی مناسب و همچینین نپرداختن به مقوله های اصلی و مهم بازار میباشد ،قصد دارد جلوی از دست رفتن سرمایه ی معامله گران را بگیرد.
              </p>
            </div>
          </div>
          <div className=" col-md-4 col-12 pb-4  d-flex justify-content-md-start justify-content-center  ">
            <div className="col-12 pr-0 pl-0 bg-white text-center r50 pb-3">
              <img
                src="./image/icon2.png"
                alt="liteforex"
                className="d-block pb-3 m-auto pt-4"
              />
              <p className="px-3">
              مباحث آموزشی ایرانچارت مختص افراد آماتور و تازه وارد نبوده،بلکه تمامی دوستانی که آشنایی نسبی با بازار را داشته و به هر علتی تا کنون موفق به داشتن یک درآمد مستمر و ثابت نبوده اند میتوانند به خوبی از آموزش های ما بهره ببرند.
              </p>
            </div>
          </div>
          <div className=" col-md-4 col-12 pb-4  d-flex justify-content-md-start justify-content-center  ">
            <div className="col-12 pr-0 pl-0 bg-white text-center tlborder pb-3">
              <img
                src="./image/icon3.png"
                alt="liteforex"
                className="d-block pb-3 m-auto pt-4"
              />
              <p className="px-3">
              در هر کسب و کار و تجارتی اصول و قواعدی وجود دارد که هر شخص حقیقی یا حقوقی با رعایت آن ها میتوانند بهترین بهره وری را از آن داشته باشد،دنیای معامله گری و تریدینگ را با ما تجربه کنید و بهترین نتیجه را کسب کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


