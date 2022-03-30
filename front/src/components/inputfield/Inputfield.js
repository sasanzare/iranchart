function Textarea(props) {
  return (
    <div className="form-group">
      <input
        className={"form-control " + props.myclass}
        type={props.type}
        onInput={(e) => props.value(e)}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Textarea;
