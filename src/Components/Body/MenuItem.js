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
          <p class="card-text">{props.dish.description}</p>
          <a onClick={props.clickFunction} class="btn btn-primary">
            Click to see details
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
