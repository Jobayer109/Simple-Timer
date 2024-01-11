import PropTypes from "prop-types";
import React from "react";

const InputText = (props) => (
  <div className="form-group">
    <label htmlFor={props.name}>{props.label}</label>
    <input
      className="form-control my-2"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

InputText.prototype = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
};

export default InputText;
