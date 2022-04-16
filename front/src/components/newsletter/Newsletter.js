import { useState } from "react";
import Inputfield from "../inputfield/Inputfield";
import EmailPatter from "../../microComponents/emailpatter/Emailpatter";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function sendNewsLetter(e) {
    e.preventDefault();
    if (EmailPatter.test(email)) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    };

    fetch(BASE_URL+"newsletter", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        } else {
          setEmail("");
          console.log(email)
        }
        
      })
      .catch((error) => {
        setErrorMessage(error.toString());
        console.error("newsletter form error : ", error);
      });
    }
  }
  return (
    <div className="Newsletter col-12 r15 text-center ">
      <p className="cs-color text-center mt-1">
        برای دریافت رایگان ویدیوی آموزشی آشنایی با دنیای ارز های دیجیتال ایمیل
        خود را وارد کنین وبلافاصــــله لینک های دانلود را دریافت نمایید
      </p>
      <form onSubmit={sendNewsLetter}>
        <Inputfield
          type="email"
          myclass=""
          value={email}
          insert={(e) => setEmail(e.target.value)}
          placeholder="آدرس ایمیل خود را وارد کنید"
          required={true}
        />
        <button
          type="submit"
          className="btn btn-success mt-2 mb-2 col-lg-4 col-md-5 col-sm-6"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
