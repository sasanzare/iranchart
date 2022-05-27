import { Styles } from "./Option.css";

export default function Option() {
  return (
  
      <div className=" Option">
        <div className=" mt-2">
          <input
            type="radio"
            id="radio2"
            name="selector"
            className="selector-item_radio d-none"
          />
          <label for="radio2" className="selector-item_label w-100 text-center radius-20 font-weight-bold">
            radio 2
          </label>
        </div>
      </div>
  );
}
