import CourseCard from '../../components/courseList/CourseCard';
import axios from 'axios';
import {useState, useEffect} from 'react'
function CourseList() {
    let content = null;
    const [course, setCourse] = useState(null);

    useEffect( ()=>{
        axios.get('http://localhost:8000/api/v1/products')
        .then(resp =>setCourse(resp.data))
    },[]);

    if(course) {
        content = course.map((article) => <CourseCard url={article.id} key={article.id} thumbnail={article.image} title={article.name}/>);       
    }
    return(
        <div className="CourseList row pb-5"> 
            {content}  
        </div>
    );
}
export default CourseList;