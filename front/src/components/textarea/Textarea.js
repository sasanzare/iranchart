function Inputfield(props) {
  return (
    <div className="form-group">
      <textarea
        className={"form-control " + props.myclass}
        rows={props.rows}
        onInput={(e) => props.value(e)}
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
}

export default Inputfield;
