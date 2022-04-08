import React, { useState, useEffect } from "react";
import QuizCard from "../../components/quizCard/QuizCard";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const API_URL = BASE_URL + "quizzes/";

const QuizzesList = () => {
  const [quizzis, setQuizzis] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setQuizzis(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="QuizzesList pb-5">
      {quizzis.length > 0 ? (
        <Carousel responsive={responsive}>
          {quizzis.map((item) => (
            <QuizCard
              key={item.id}
              id={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
            />
          ))}
        </Carousel>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="spinner d-flex align-items-center justify-content-center">
            <div className="spinner__ball"></div>
          </div>
          <h6 className="dir-ltr mt-3">Loading...</h6>
        </div>
      )}
    </div>
  );
};
export default QuizzesList;
