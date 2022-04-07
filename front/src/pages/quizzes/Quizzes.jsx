import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import QuizzesList from "../../blocks/quizzesList/QuizzesList";
function Quizzes() {
  return (
    <div className="Quizzes container pt-5">
      <div className="row pt-5">
          <div className="col-12 text-center">
          <FontAwesomeIcon icon={faBrain} className="font-70 text-secondary" />
          <h1 className="h6 font-weight-bold pt-2">آزمون‌ها</h1>
          <p className="text-center mb-0">دانش تجارت خود را آزمایش کنید.</p>
          <p className="text-center col-lg-7 col-md-9 col-12 mx-auto">آیا می‌خواهید خود را با چند آزمون سرگرم کننده تجارت به چالش بکشید؟ دانش خود را در مورد موضوعات مختلف مرتبط با بازار آزمایش کنید و در صول مسیر با حقایق جدیدی آشنا شوید.</p>
          </div>
      

      </div>
      <QuizzesList/>

    </div>
  );
}

export default Quizzes;
