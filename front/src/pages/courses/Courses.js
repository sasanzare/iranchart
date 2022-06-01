import CourseList from "../../blocks/courseList/CourseList";
import UseDocumentTitle from "../../components/useDocumentTitle/UseDocumentTitle";
export default function Courses() {
  UseDocumentTitle({
    title: 'دوره‌های آموزشی',
    metaDescription: 'دوره‌های آموزشی ایران چارت'
  })
  return (
    <div className="Course">
      <div className="container pt-5">
        <div className="row  mt-5">
          <h1 className="col-12 h4 text-center pb-3">
                دروه‌های آموزشی
          </h1>
          
        </div>
        <CourseList />
      </div>
    </div>
  );
}

 
