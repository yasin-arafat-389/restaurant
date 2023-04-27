import React, { Component } from "react";
import "./stylings.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      tel: "",
      email: "",
      agree: false,
      contactType: "Tel",
      message: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    document.title = "Contact";
    return (
      <div className="Contact">
        <h1 class="display-4 mt-5">Send us your feedback</h1>
        <div className="FormContainer">
          <form onSubmit={this.handleSubmit}>
            <div class="form-floating mb-3">
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                class="form-control"
                id="floatingInput"
                placeholder="First Name"
              />
              <label for="floatingInput">First Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                class="form-control"
                id="floatingInput"
                placeholder="Last Name"
              />
              <label for="floatingInput">Last Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="tel"
                name="tel"
                value={this.state.tel}
                onChange={this.handleInputChange}
                class="form-control"
                id="floatingInput"
                placeholder="Phone Number"
              />
              <label for="floatingInput">Phone Number</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                class="form-control"
                id="floatingInput"
                placeholder="Email"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="agree"
                checked={this.state.agree}
                onChange={this.handleInputChange}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                May we contact you?
              </label>
            </div>
            <select
              class="form-select"
              aria-label="Default select example"
              name="contactType"
              value={this.state.contactType}
              onChange={this.handleInputChange}
            >
              <option value="1">Tel</option>
              <option value="2">Email</option>
            </select>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Your Feedback
              </label>
              <textarea
                class="form-control"
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-outline-primary mb-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
