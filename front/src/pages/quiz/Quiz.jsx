import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
import Loading from "../../components/loading/Loading";
import Incorrect from "../../microComponents/incorrect/Incorrect";
import Correct from "../../microComponents/correct/Correct";

export default function Quiz() {
  const { id } = useParams();
  const QUIZ_URL = BASE_URL + "quiz/" + id;
  const QUESTIONS_URL = BASE_URL + "question/?quiz=" + id;
  const OPTION_URL = BASE_URL + "question-option/?question=" + id;
 
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState([]);
  const [option, setOption] = useState([]);

  const getQuiz = async () => {
    const { data } = await axios.get(QUIZ_URL);
    setQuiz(data);
  };
  const getQuestion = async () => {
    const { data } = await axios.get(QUESTIONS_URL);
    setQuestion(data);
  };
  const getOption = async () => {
    const { data } = await axios.get(OPTION_URL);
    setOption(data);
  };

  useEffect(() => {
    getQuiz();
    getQuestion();
    getOption();
  }, []);

  let correct = 0;
  let inCorrect = 0;
  let counter = 0;

  return (
    <div className="Quiz container pt-5">
      <div className="row py-5 mt-2 flex-column">
        {quiz.length != 0 ? (
            <div
              className="col-lg-4 col-md-5 col-sm-7 col-8 mx-auto shadow p-0 overflow-hidden rounded"
            >
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
          <Loading/>
        )}

         {question.length > 0 ? (
          <div className="col-lg-4 col-md-5 col-sm-7 col-8 mx-auto pt-5">
            <div className="row">
              <div className="col border-left text-center">
                <span>امتیاز شما</span>
                <div className="d-flex justify-content-between">
                <Incorrect title={inCorrect} />
                <Correct title={correct} />
                </div>
              </div>
              <div className="col text-center">
                سوال 1/{question.length}
                <div className="progress radius-10">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: 100 / question.length + "%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax={question.length}
                  ></div>
                </div>
              </div>
              <div className="col-12 py-3">
                <h2 className="h6 text-center font-weight-bold">{question[counter]["prompt"]}</h2>
                
              </div>
            </div>
          </div>
        ) : (
          <Loading/>
        )} 
      </div>
    </div>
  );
}
