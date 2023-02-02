import React from "react";
import "./stylings.css";

const MenuItem = (props) => {
  return (
    <div className="container">
      <div class="card">
        <img
          src={props.dish.image}
          class="card-img-top"
          alt={props.dish.name}
        />
        <div class="card-body">
          <h5 class="card-title">{props.dish.name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
