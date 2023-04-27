import React from "react";
import { Component } from "react";
import { Form, Input, Button } from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      rating: "",
      comment: "",
    };
    this.HandleInputChange = this.HandleInputChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  HandleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  HandleSubmit = (event) => {
    console.log(this.state);
    this.props.addComment(
      this.props.dishId,
      this.state.author,
      this.state.rating,
      this.state.comment
    );

    this.setState({
      author: "",
      rating: "",
      comment: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Your Review</h3>
        <br />
        <Form onSubmit={this.HandleSubmit}>
          <Input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.HandleInputChange}
            placeholder="Your Name"
            required
          />
          <br />
          <h5 className="text-center">Your Rating:</h5>
          <Input
            type="select"
            name="rating"
            value={this.state.rating}
            onChange={this.HandleInputChange}
          >
            {" "}
            <option id="options">1</option>
            <option id="options">2</option>
            <option id="options">3</option>
            <option id="options">4</option>
            <option id="options">5</option>
          </Input>
          <br />

          <Input
            type="textarea"
            name="comment"
            value={this.state.comment}
            onChange={this.HandleInputChange}
            placeholder="Your Review"
            required
          />
          <br />
          <Button type="submit">Submit Review</Button>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
