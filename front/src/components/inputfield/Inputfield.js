function Inputfield(props) {
  let required;
  return (
    <div className="form-group">
      <input
        className={"form-control " + props.myclass}
        type={props.type}
        value={props.value}
        onInput={(e) => props.insert(e)}
        placeholder={props.placeholder}
        required={props.required}
 
      />
    </div>
  );
}

export default Inputfield;
