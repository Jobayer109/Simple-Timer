import PropTypes from "prop-types";
import React from "react";
import InputText from "./inputText";

const Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <InputText
      name="name"
      label="Enter name"
      placeholder="Name"
      value={props.values.name}
      onChange={props.handleChange}
    />
    <InputText
      type="email"
      name="email"
      label="Enter email"
      placeholder="Email"
      value={props.values.email}
      onChange={props.handleChange}
    />
    <InputText
      type="password"
      name="password"
      label="Enter password"
      placeholder="*********"
      value={props.values.password}
      onChange={props.handleChange}
    />

    <button type="submit">Submit</button>
  </form>
);

Form.prototype = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
