import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckSquare } from "@fortawesome/free-solid-svg-icons";
export default function Correct(props){
    return(
        <div className="d-flex">
          <FontAwesomeIcon
            icon={faCheckSquare}
            className="h5 text-green"
          />
          <span className="text-right mt-1   mr-2 font-weight-bold">{props.title}</span>
        </div>
    );
}