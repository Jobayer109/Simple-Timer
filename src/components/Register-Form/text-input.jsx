import PropTypes from "prop-types";
import React from "react";

const TextInput = ({ type, name, label, value, placeholder, onChange }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      className="form-control my-2"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
