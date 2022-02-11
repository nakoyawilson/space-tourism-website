const RadioButton = (props) => {
  return (
    <div className={props.radioButtonClasses}>
      <input
        type="radio"
        name={props.groupName}
        id={props.buttonID}
        value={props.buttonValue}
        defaultChecked={props.isChecked}
      />
      <label className={props.labelClasses} htmlFor={props.buttonID}>
        {props.buttonLabel}
      </label>
    </div>
  );
};

export default RadioButton;
