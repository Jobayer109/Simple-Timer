import { Component } from "react";

class MyForm extends Component {
  render() {
    return (
      <div>
        <input
          className="form-control my-2"
          type="text"
          name="name"
          placeholder="Your name hare"
        />
        <select name="country" className="form-control my-2">
          <option>Select a country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Malaysia">Malaysia</option>
        </select>

        <textarea
          className="form-control my-2"
          name="bio"
          placeholder="Write about yourself"
        ></textarea>
        <input className="form-control my-2" type="date" name="birthDay" />
      </div>
    );
  }
}

export default MyForm;
