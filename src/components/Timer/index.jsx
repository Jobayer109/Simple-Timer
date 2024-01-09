import React, { Component } from "react";
import "./timer.css";

class MyTimer extends Component {
  state = {
    count: 0,
  };

  interValId = null;

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    if (this.state.count > 0 && !this.interValId) {
      this.interValId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Timer Finished");
            clearInterval(this.interValId);
            this.interValId = null;
          }
        });
      }, 1000);
    }
  };

  pauseTimer = () => {
    if (this.interValId) {
      clearInterval(this.interValId);
      this.interValId = null;
    }
  };

  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.interValId);
    this.interValId = null;
  };

  render() {
    return (
      <section>
        <div className="container">
          <button onClick={this.decrement}>-</button>
          <span> {this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div className="container">
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.pauseTimer}>Pause</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
        <div className="container"></div>
      </section>
    );
  }
}

export default MyTimer;
