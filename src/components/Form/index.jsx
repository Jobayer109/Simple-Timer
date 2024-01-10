import { Component } from "react";

class MyForm extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthDay: "",
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, country, bio, birthDay } = this.state;
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
          <button onClick={() => console.log(this.state)}>Show Data</button>
        </div>
      </div>
    );
  }
}

export default MyForm;
