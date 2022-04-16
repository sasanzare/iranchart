import CommentList from "../../components/CommentList/CommentList";
export default function Comment(props){
    return(
        <div className="Comment px-2">
            <CommentList id={props.id}/>
        </div>
    );
}