import { useState,useEffect } from "react";
import EmailPatter from "../../microComponents/emailpatter/Emailpatter";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [correctsubmit, setCorrectsubmit] = useState(false);
  

  useEffect(() => {
    setTimeout(()=>setCorrectsubmit(false), 4000);
  },[correctsubmit]);

  function sendContact(e) {
    e.preventDefault();
    if (EmailPatter.test(email)) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    };

    fetch(BASE_URL+"contact", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        } else {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setCorrectsubmit(true);
        }
        
      })
      .catch((error) => {
        setErrorMessage(error.toString());
        console.error("Contact form error : ", error);
      });
    }
  }
  return (
    <div className="contactForm">
      <div className={ correctsubmit ?"alert alert-success text-right  fade show":"alert alert-success text-right fade"} role="alert">
      <span>از ارسال پیغام شما سپاس گزاریم.</span>
      </div>
      <form
        onSubmit={sendContact}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onInput={(e) => setName(e.target.value)}
                placeholder="نام و نام خانوادگی"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                className= "form-control"
                name="email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
                placeholder="آدرس ایمیل"
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                className= "form-control"
                name="subject"
                value={subject}
                onInput={(e) => setSubject(e.target.value)}
                placeholder="عنوان پیام"
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <textarea
                name="message"
                className= "form-control"
                cols="30"
                rows="4"
                value={message}
                onInput={(e) => setMessage(e.target.value)}
                placeholder="پیام خود را بنویسید"
                required
              ></textarea>
            </div>
          </div>
          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn bg-green text-white col-lg-4 col-md-6"
            >
              ارسال پیام
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contactform;
