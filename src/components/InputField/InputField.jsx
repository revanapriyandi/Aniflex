import "./style.css";

const InputField = ({
  type,
  placeholder,
  name,
  additionalClass,
  validationMessage,
  validation,
  errors,
  disabled,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`sign__input ${errors?.[name] ? "error" : ""} ${
          additionalClass ? additionalClass : ""
        }`}
        ref={validation}
        disabled={disabled}
      />
      {errors?.[name] && <p className="error-message">{validationMessage}</p>}
    </>
  );
};

export default InputField;
