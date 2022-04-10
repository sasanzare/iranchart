import { Styles } from "./NewsCard.css";
import ShowMoreText from "react-show-more-text";
export default function NewsCard(props) {
  return (
    <div className="radius-10 shadow overflow-hidden mb-3 pb-3">
      <div className="bg-ashy d-flex px-3 pt-2">
        <h6 className="col-md-10 col-sm-9 col-8 text-right p-0">
          {props.title}
        </h6>
        <span className="col-md-2 col-sm-3  col-4 p-0">{props.data}</span>
      </div>
      <ShowMoreText
        lines={1}
        more="ادامه مطلب"
        less="بستن مطلب"
        className="p-3 text-right font-14"
        anchorClass="border px-2 py-1 radius-10 more"
        truncatedEndingComponent={"... "}
      >
        <p className="mb-0">{props.content}</p>
      </ShowMoreText>
    </div>
  );
}
