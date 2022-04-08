import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
export default function QuizCategory(props){
    return(
        <div className="col-12 d-flex">
          <FontAwesomeIcon
            icon={faCheckSquare}
            className="h5 text-green mr-2"
          />
          <h6 className="text-right pb-3 mr-2 font-weight-bold">{props.title}</h6>
        </div>
    );
}