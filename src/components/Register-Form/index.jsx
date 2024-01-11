import React, { Component } from "react";
import Form from "./form";

const initValues = {
  name: "",
  email: "",
  password: "",
  gender: "",
};

class SignUpForm extends Component {
  state = {
    values: initValues,
    agreement: false,
  };

  handleChange = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    e.target.reset();
    this.setState({ values: initValues, agreement: false });
  };

  handleAgreement = (e) => {
    this.setState({ agreement: e.target.checked });
  };

  render() {
    return (
      <div>
        <hr />
        <h3 style={{ marginTop: "35px" }}>Sign Up form (Professional)</h3>

        <Form
          values={this.state.values}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleAgreement={this.handleAgreement}
          agreement={this.state.agreement}
        />

        <hr style={{ marginBottom: "35px" }} />
      </div>
    );
  }
}

export default SignUpForm;
