import Style from "./CommentList.css";
import {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
import Loading from "../loading/Loading";


export default function CommentList(props) {
    const [comments, setComments] = useState([]);
    const getComments = async () => {
      const { data } = await axios.get( BASE_URL +"comments?ordering=-created&post="+ props.id);
      setComments(data);
    };
  
    useEffect(() => {
      getComments();
    }, [props.id]);
  
  return (
    <div className="CommentList comments mt-5 ">
      {comments.length != 0 ?(
        comments.map((comment)=>
        <div key={comment.id}>
          <div className="d-flex justify-content-between progress-bar-striped bg-light comment-name px-2 py-1">
            <span className="text-secondary font-12">{comment.name}</span>
            <span className="text-secondary font-12">{comment.created.split("T")[0]}</span>
          </div>
          <p>{comment.body}</p>
        </div>
        )
      ):(
        <Loading/>
      )} 
    </div>
  );
}
