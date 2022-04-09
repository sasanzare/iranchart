import { Styles } from "./Loading.css";
export default function Loading(){
    return(
        <div className="Loading col-12 d-flex flex-column align-items-center justify-content-center">
        <div className="spinner d-flex align-items-center justify-content-center">
          <div className="spinner__ball"></div>
        </div>
        <h6 className="dir-ltr mt-3">Loading...</h6>
      </div>
    );
}