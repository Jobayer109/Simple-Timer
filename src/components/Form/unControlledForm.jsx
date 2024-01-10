import React from "react";

class UnControlledForm extends React.Component {
  formHandler = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(data);
  };

  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <h1>Un-controlled Form </h1>

        <form onSubmit={this.formHandler}>
          <input
            className="form-control my-2"
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            className="form-control my-2"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="form-control my-2"
            type="password"
            name="password"
            placeholder="Password"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UnControlledForm;
