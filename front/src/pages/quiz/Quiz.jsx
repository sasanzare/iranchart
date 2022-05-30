import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
import Loading from "../../components/loading/Loading";
import Incorrect from "../../microComponents/incorrect/Incorrect";
import Correct from "../../microComponents/correct/Correct";
import SourcePost from "../../components/sourcePost/SourcePost";
// import Option from "../../microComponents/option/Option"
import { Styles } from "./Quiz.css";

let right = 0;
let wrongCounter = 0;
let count = 1;
export default function Quiz() {
  const { id } = useParams();
  const QUIZ_URL = BASE_URL + "quiz/" + id;
  const QUESTIONS_URL = BASE_URL + "question/?quiz=" + id;

  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState([]);
  const [options, setOptions] = useState([]);
  const [posts, setPosts] = useState([]);
  const [select, setSelect] = useState("");
  const [counter, setCounter] = useState(1);
  const [correct, setCorrect] = useState(0);
  const [inCorrect, setInCorrect] = useState(0);
  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(false);

  const OPTIONS_URL = BASE_URL + "question-option/?question=" + counter;


  window.addEventListener('popstate', (event) => {
      window.location=document.referrer;
      
   });
  

  const getQuiz = async () => {
    const { data } = await axios.get(QUIZ_URL);
    setQuiz(data);
  };
  const getQuestion = async () => {
    const { data } = await axios.get(QUESTIONS_URL);
    setQuestion(data);
    setPercent(data.length);
  };
  const getOptions = async () => {
    const { data } = await axios.get(OPTIONS_URL);
    setOptions(data);
  };

  const getIdPost = async (postId) => {
    const { data } = await axios.get(BASE_URL + postId);
    data["title"] = question[wrongCounter-1]["prompt"];
    data["slug"] = wrongCounter;
    setPosts(posts.concat(data))
  };

  useEffect(() => {
    getQuiz();
    getQuestion();
    getOptions();
  }, []);

  useEffect(() => {
    getOptions();
  }, [counter]);

  function corrector() {
    options.forEach((option) => {
      if (option.correct) {
        right = option.text;
      }
    });
    if (select == right) {
      setCorrect(correct + 1);
    } else {
      setInCorrect(inCorrect + 1);
      getIdPost(question[wrongCounter]["post"]);
    }
    wrongCounter++;
  }

  const width = parseFloat(100 / percent);
  const nextOption = () => {
    if (percent > counter) {
      count++;
      corrector();
      setCounter(counter + 1);
      document.querySelector(".progress-bar").style.width = width * count + "%";
    } else if (percent == counter) {
      corrector();
      document.getElementById("context").remove();
      setShow(true);
    }
  };

  return (
    <div className="Quiz container pt-5">
      <div id="context" className="row py-5 mt-2 flex-column">
        {quiz.length != 0 ? (
          <div className="col-lg-4 col-md-5 col-sm-7 col-8 mx-auto shadow p-0 overflow-hidden rounded">
            <img
              className="w-100 rounded-0 rounded-top"
              height={150}
              src={quiz.thumbnail}
              alt={quiz.title}
            />
            <h1 className="text-center text-green font-weight-bold h6 pt-3 pb-1">
              {quiz.title}
            </h1>
          </div>
        ) : (
          <Loading />
        )}

        {question.length > 0 ? (
          <div className=" col-12 pt-5">
            <div className="row">
              <div className="col-8 d-flex mx-auto justify-content-center">
                <div className="col-md-4 border-left text-center">
                  <span>امتیاز شما</span>
                  <div className="d-flex justify-content-between">
                    <Correct title={correct} />
                    <Incorrect title={inCorrect} />
                  </div>
                </div>
                <div className="col-md-4  text-center">
                  سوال
                  {counter}/{question.length}
                  <div className="progress radius-10">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: width + "%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax={question.length}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 col-12 py-3 mx-auto">
                <h2 className="h6 text-center font-weight-bold">
                  {question[counter - 1]["prompt"]}
                </h2>
                {options.length > 0 ? (
                  <div className="d-flex flex-column">
                    {options.map((option) => (
                      <div className=" mt-2" key={option.id}>
                        <input
                          type="radio"
                          id={option.text}
                          value={option.text}
                          name="selector"
                          className="selector-item_radio d-none"
                          checked={select === option.text}
                          onChange={(e) => {
                            setSelect(e.target.value);
                          }}
                        />

                        <label
                          htmlFor={option.text}
                          className="selector-item_label w-100 text-center radius-20 font-weight-bold"
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}

                    <button
                      onClick={nextOption}
                      className="btn mx-auto btn-secondary radius-20 col-4 mt-3"
                    >
                      بعدی
                    </button>
                  </div>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>

      {show === true ? (
        <div className="row py-5 mt-2">
          <div className=" col-lg-8 col-12 mx-auto">
              <div className="py-4 bg-green radius-10 text-white text-center">
                <h4 className="h6   font-weight-bold">
                  امتیاز شما {correct} از {question.length}
                </h4>
                {(question.length != correct)?(
                    <p className="text-center mb-0 font-weight-bold">
                    برای پاسخ‌های اشتباه شما مقالاتی را پیشنهاد می کنیم که با
                    مطالعه آن‌ها دانش کافی را بدست آورید.
                  </p>
                ):null}
                
              </div>
          </div>
          <SourcePost list={posts} />
        </div>
      ) : null}
    </div>
  );
}
