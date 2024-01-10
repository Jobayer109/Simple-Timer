import React, { Component } from "react";

class ControlledForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: "", email: "", password: "" });
    console.log(this.state);
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div style={{ marginTop: "40px" }}>
        <h3>Controlled Form with React </h3>

        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control my-2"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.changeHandler}
          />
          <input
            className="form-control my-2"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.changeHandler}
          />
          <input
            className="form-control my-2"
            type="password"
            name="password"
            placeholder="******"
            value={password}
            onChange={this.changeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default ControlledForm;
