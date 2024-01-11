import React, { Component } from "react";
import Form from "./form";

class SplitForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: "", email: "", password: "" });
    console.log(this.state);
  };

  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <h3>Split Form with React (npm prop-types)</h3>

        <Form
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
export default SplitForm;
