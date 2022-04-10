import CourseList from "../../blocks/courseList/CourseList";
function Courses() {
  return (
    <div className="Course">
      <div className="container pt-5">
        <div className="row  mt-5">
          <h1 class="col-12 h4 text-center pb-3">
                دروه‌های آموزشی
          </h1>
          
        </div>
        <CourseList />
      </div>
    </div>
  );
}

export default Courses;
