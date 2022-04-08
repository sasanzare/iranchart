import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";

export default function Quiz() {
  const { id } = useParams();
  const QUIZ_URL = BASE_URL + "quizzes/?id=" + id;
  const OPTION_URL = BASE_URL + "question-option/?question=" + id;

  const [quiz, setQuiz] = useState([]);
  const [option, setOption] = useState([]);
  const getQuiz = async () => {
    const { data } = await axios.get(QUIZ_URL);
    setQuiz(data);
  };
  const getOption = async () => {
    const { data } = await axios.get(OPTION_URL);
    setOption(data);
  };

  useEffect(() => {
    getQuiz();
    getOption();
  }, []);
  return (
    <div className="Quiz container pt-5">
      <div className="row py-5 mt-2 flex-column">
        {quiz.length > 0 ? (
          quiz.map((item) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-5 col-sm-7 col-8 mx-auto shadow p-0 overflow-hidden rounded"
            >
              <img
                className="w-100 rounded-0 rounded-top"
                height={150}
                src={item.thumbnail}
                alt={item.title}
              />
              <p className="text-center text-green font-weight-bold h6 pt-2">
                {item.title}
              </p>
            </div>
          ))
        ) : (
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <div className="spinner d-flex align-items-center justify-content-center">
              <div className="spinner__ball"></div>
            </div>
            <h6 className="dir-ltr mt-3">Loading...</h6>
          </div>
        )}

        {option.length > 0 ? (
          <div className="col-lg-4 col-md-5 col-sm-7 col-8 mx-auto pt-5">
            <div className="row">
              <div className="col border-left text-center">امتیاز شما
              
              </div>
              <div className="col text-center">
                سوال 1/{option.length}
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: 100 / 3 + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax={option.length}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <div className="spinner d-flex align-items-center justify-content-center">
              <div className="spinner__ball"></div>
            </div>
            <h6 className="dir-ltr mt-3">Loading...</h6>
          </div>
        )}
      </div>
    </div>
  );
}
