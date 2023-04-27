import React, { Component } from "react";
import { connect } from "react-redux";

const HomeProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

class Home extends Component {
  render() {
    document.title = "Burrito Boyz";
    return (
      <div className="Home">
        <div></div>
      </div>
    );
  }
}

export default connect(HomeProps)(Home);
