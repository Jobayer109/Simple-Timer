import PropTypes from "prop-types";
import React from "react";
import TextInput from "./text-input";

const Form = ({
  values,
  agreement,
  handleChange,
  handleSubmit,
  handleAgreement,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        name="name"
        label="Enter name"
        value={values.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <TextInput
        type="email"
        name="email"
        label="Enter email"
        value={values.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <TextInput
        type="password"
        name="password"
        label="Enter password"
        value={values.password}
        placeholder="***********"
        onChange={handleChange}
      />

      <div className="form-control">
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={handleChange}
          />{" "}
          Other
        </label>
      </div>
      <div className="form-control">
        <input
          type="checkBox"
          name="agreement"
          checked={agreement}
          onChange={handleAgreement}
        />{" "}
        I Agree
      </div>

      <button className="btn btn-success" type="submit" disabled={!agreement}>
        Create User
      </button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
};

export default Form;
