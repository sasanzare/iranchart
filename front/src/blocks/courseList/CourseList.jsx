import CourseCard from "../../components/courseCard/CourseCard";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../../components/loading/Loading";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";

function CourseList() {
  const courses_URL = BASE_URL + "products?ordering=-created";
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    const { data } = await axios.get(courses_URL);
    setCourses(data);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="CourseList row pb-5">
      {courses.length > 0 ? (
        courses.map((course) => (
          <CourseCard
            url={course.id}
            key={course.id}
            thumbnail={course.image}
            title={course.name}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
export default CourseList;
