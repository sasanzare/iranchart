import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import QuizzesList from "../../blocks/quizzesList/QuizzesList";
import QuizCategory from "../../microComponents/quizCategory/QuizCategory";
function Quizzes() {
  return (
    <div className="Quizzes container pt-5">
      <div className="row pt-5">
        <div className="col-12 text-center">
          <FontAwesomeIcon icon={faBrain} className="font-70 text-secondary" />
          <h1 className="h6 font-weight-bold pt-2">آزمون‌ها</h1>
          <p className="text-center mb-0">دانش تجارت خود را آزمایش کنید.</p>
          <p className="text-center col-lg-7 col-md-9 col-12 mx-auto">
            آیا می‌خواهید خود را با چند آزمون سرگرم کننده تجارت به چالش بکشید؟
            دانش خود را در مورد موضوعات مختلف مرتبط با بازار آزمایش کنید و در
            صول مسیر با حقایق جدیدی آشنا شوید.
          </p>
        </div>
        <QuizCategory title="ویژه" />
      </div>
      <QuizzesList />
      <div className="row">
        <QuizCategory title="محبوب" />
      </div>
      <QuizzesList />
      <div className="row">
        <QuizCategory title="همه کوییز‌ها" />
      </div>
      <QuizzesList />
      <div className="row">
        <p className="col-lg-6 col-md-8 col-sm-10 mx-auto font-30 text-left text-green font-weight-bold mb-0">&#10076;&#10076;</p>
        <p className="col-12 mt-n5 text-green font-weight-bold text-center ">برای ماه شلیک کن حتی اگر از دست بدهید، در میان ستاره‌ها فرود خواهید آمد.
        <span className="d-block text-dark font-11 mt-n2">bruce lee</span>
        </p>
        <p className="col-lg-6 col-md-8 col-sm-10 mx-auto font-30  text-green font-weight-bold mb-0 mt-n5">&#10075;&#10075;</p>
      </div>
    </div>
  );
}

export default Quizzes;
