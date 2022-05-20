import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare,faXmarkSquare } from "@fortawesome/free-solid-svg-icons";
export default function Incorrect(props){
    return(
        <div className="d-flex">
          <FontAwesomeIcon
            icon={faCheckSquare}
            className="h5 text-green"
          />
          <span className="text-right mt-1  mr-2 font-weight-bold">{props.title}</span>
        </div>
    );
}