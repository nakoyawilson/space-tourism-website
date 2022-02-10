const RadioButton = (props) => {
  return (
    <div className={props.radioButtonClasses}>
      <label className={props.labelClasses}>
        {props.buttonValue}
        <input
          type="radio"
          name={props.groupName}
          id={props.buttonID}
          value={props.buttonValue}
        />
      </label>
    </div>
  );
};

export default RadioButton;
