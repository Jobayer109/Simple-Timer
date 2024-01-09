import React from "react";

class MyEvent extends React.Component {
  state = {
    name: "",
  };

  clickMe = (e) => {
    console.log(e.target);
  };

  onChangeHandle = (e) => {
    this.setState({ name: e.target.value });
  };

  focusHandler = (e) => {
    console.log("I'm focused");
  };

  blurHandler = (e) => {
    if (!this.state.name) {
      alert("Input your name");
    }
    console.log("I am blur event");
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <div className="click button">
          <button onClick={this.clickMe}>Click ME</button>
        </div>
        <div className="input__field">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name here"
            onChange={this.onChangeHandle}
            onFocus={this.focusHandler}
            onBlur={this.blurHandler}
          />

          <br />
          <br />
          {this.state.name && (
            <p>
              Welcome, <strong>{this.state.name}</strong>
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default MyEvent;
