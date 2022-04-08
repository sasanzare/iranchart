import {Link} from 'react-router-dom'
function Footer() {
  return (
        <div className='Footer'>

                <div className="container-fluid">
                  <div className="row footerbg pt-4">
                    <div className="col-md-6 col-sm-6 pb-4 text-center">
                      <h5 className="text-white text-md-right  ">درباره ایران چارت</h5>
                      <hr className="bg-white"/>
                      <p className="text-md-right text-justify text-white ">
                        تیم تخصصی ایرانچارت با هدف آمـــــوزش در زمیـنه ی فارکــس در تلاش اســـــت تا با بهـــترین متد های بــــازار 
                        جهانی فارکس مخاطبان خود را آشنا ساخته و آمـــــوزش های کاملی را ارئه کنــــد، از این رو همــــیشه در تلــاش 
                        هستیم تا آموزش های خودمـــــان را آپدیت کرده و اطـــلاعات جامعی را در اختیــار هموطـــنان عزیــــزمان قــــرار 
                        دهیم و در این مسیر پرریسک به عنوان یک همراه قابل اعـــــتماد همــــیشه در کنار شما عزیزان هستـیم تا با 
                        آرامش خـــاطر فارکس را آموزش ببـــــینید و نهــایت تلاش خودمان را در جـــهت موفقیت شما در کــوتاه تــــرین 
                        زمان خواهیم کرد
                      </p>
                      
                          </div>
                  
                    <div className="col-md-3 col-sm-6 pb-4 text-center">
                      <h5 className="text-white text-md-right ">لینک های مفید</h5>
                      <hr className="bg-white"/>
                      <ul className="list-group text-right f-list p-0">
                        <li className="list-group-item"><a href="#" className="text-white btn w-100 text-md-right radius-25">افتتاح حساب واقعی در بروکر دلخواهتان</a></li>
                        <li className="list-group-item"><a href="#" className="text-white btn w-100 text-md-right radius-25">افتتاح حساب دمـــو در بروکر دلخواهتــان</a></li>
                        <li className="list-group-item"><a href="#" className="text-white btn w-100 text-md-right radius-25">آشنایی با بونوس های بروکر های مختلف</a></li>
                        <li className="list-group-item"><a href="#" className="text-white btn w-100 text-md-right radius-25">مقایسه حسـاب ها در بروکر های مخــتلف</a></li>
                        <li className="list-group-item"><a href="#" className="text-white btn w-100 text-md-right radius-25">پرسش پاسخ های مرتبط با افتــتاح حساب</a></li>        
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 pb-4 text-center">
                      <h5 className="text-white text-md-right  ">ارتباط با ما</h5>
                      <hr className="bg-white"/>
                      <ul className="list-group text-right f-list p-0">
                        <li className="list-group-item"><a href="#" className="text-white btn w-100 text-md-right radius-25">پشتیــــبانی تلـــــگرام</a></li>
                        <li className="list-group-item"><a href="#" className="text-white btn w-100 text-md-right radius-25">پشتیــــبانی واتســاپ</a></li>
                        <li className="list-group-item"><Link to="/faq" className="text-white btn w-100 text-md-right radius-25">سوالات متداول</Link></li>
                        <li className="list-group-item"><a href="#" className="text-white btn w-100 text-md-right radius-25">تحلــــــــیل روزانـــــــــــه</a></li>
                        <li className="list-group-item"><a href="#" className="text-white btn w-100 text-md-right radius-25">کانال وی آی پی تلگرام</a></li>        
                      </ul>


                    </div>
                  </div>
                  <div className="row dir-ltr overflow-hidden">
                  <div className="col-md-6 col-12 pt-2 wrap-cp pb-0">
                      <p className="text-white  pt-2  dir-ltr mb-1 text-md-left text-center mt-n1">Website by <a className='text-warning font-weight-bold' href='https://sasanzare.ir/'>sasanzare.ir</a>
                      </p>
                    </div>
                    <div className="col-md-6 col-12 pt-2 wrap-cp pb-0 ">
                      <p className=" text-white  pt-2  dir-ltr mb-1 text-md-right text-center mt-n1">کليه حقوق مادی و معنوی اين سایت متعلق به ایران چارت میباشد</p>
                    </div>
                    
                  </div>
                
                
                </div>
              
           
        </div>
  );
}

export default Footer;



