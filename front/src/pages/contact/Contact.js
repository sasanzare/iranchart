import Map from "../../components/map/Map";
function Contact() {
  return (
    <div className="Contact mt-5 pt-4">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 contactform px-4 py-4 ">
            <div className="row no-gutters">
            <div className="col-lg-8 col-md-7">
                <div className="contact-wrap w-100 pl-md-5 p-2">
                  <h4 className="pb-lg-4 pb-md-2  text-center">
                    صمیمانه پذیرای پیشنهادات و انتقادات شما هستیم
                  </h4>
                  <div id="form-message-warning" className="mb-4"></div>

                  <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="نام و نام خانوادگی"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="آدرس ایمیل"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="عنوان پیام"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="پیام خود را بنویسید"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                          <button
                            type="submit"
                            className="btn bg-green text-white col-lg-4 col-md-6"
                          >ارسال پیام</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 p-2 d-flex align-items-stretch ">
                <div className=" bg-green w-100  p-4 text-white contactform d-flex justify-content-center align-items-center">
                    <div>
                    <p className="h5 pb-4">ارتباط با ما</p>
                  <div className="dbox w-100 d-flex align-items-start">
                    <div className="text pl-3">
                      <p className="h6">
                        <span className="ml-3">
                          <img src="./image/phone.png" />
                        </span>
                        09178700787
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="text pl-3">
                      <p className="h6">
                        <span className="ml-3">
                          <img src="./image/location.png" />
                        </span>
                        شیراز خیابان بعثت کوی 16
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="text pl-3">
                      <p className="h6">
                        <span className="ml-3">
                          <img src="./image/insta.png" />
                        </span>
                        @ iranchart_fx
                      </p>
                    </div>
                  </div>
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        
        </div>
        <div className="row pt-5">
            <h4 className="text-center col-12 py-3">ما را بر روی نقشه ببینید.</h4>
        <div className="col-12 p-0 pb-4">
            <Map />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Contact;
