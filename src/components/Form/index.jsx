import { Component } from "react";

class MyForm extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
    radio: "",
    agree: false,
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkHandler = (event) => {
    this.setState({ agree: event.target.checked });
  };

  render() {
    const { name, country, bio, birthDay, agree } = this.state;
    return (
      <div>
        <input
          className="form-control my-2"
          type="text"
          name="name"
          value={name}
          placeholder="Your name hare"
          onChange={this.onChangeHandler}
        />
        <select
          name="country"
          value={country}
          className="form-control my-2"
          onChange={this.onChangeHandler}
        >
          <option>Select a country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Malaysia">Malaysia</option>
        </select>

        <textarea
          className="form-control my-2"
          name="bio"
          value={bio}
          placeholder="Write about yourself"
          onChange={this.onChangeHandler}
        ></textarea>
        <input
          className="form-control my-2"
          type="date"
          name="birthDay"
          value={birthDay}
          onChange={this.onChangeHandler}
        />

        <div>
          <input
            type="radio"
            name="radio"
            value="male"
            onChange={this.onChangeHandler}
          />{" "}
          Male
          <input
            type="radio"
            name="radio"
            value="female"
            onChange={this.onChangeHandler}
          />{" "}
          Female
          <input
            type="radio"
            name="radio"
            value="other"
            onChange={this.onChangeHandler}
          />{" "}
          Other
        </div>

        <div>
          <input
            type="checkBox"
            name="agree"
            checked={agree}
            onChange={this.checkHandler}
          />{" "}
          I Agree
        </div>

        <div onClick={() => console.log(this.state)}>
          {this.state.agree ? (
            <button>Show Data</button>
          ) : (
            <button disabled>Show Data</button>
          )}
        </div>
      </div>
    );
  }
}

export default MyForm;
