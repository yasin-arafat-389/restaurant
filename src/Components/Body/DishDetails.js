import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import "./stylings.css";

const DishDetails = (props) => {
  return (
    <div class="card">
      <img src={props.dish.image} class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{props.dish.name}</h5>
        <p class="card-text">{props.dish.description}</p>

        <div class="d-details">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Category: {props.dish.category}</li>
            <li class="list-group-item">Label: {props.dish.label}</li>
            <li class="list-group-item">Price: {props.dish.price}/-</li>
          </ul>
          <Comments comments={props.comments} />
          <hr />
          <CommentForm dishId={props.dish.id} addComment={props.addComment} />
        </div>
      </div>
    </div>
  );
};

export default DishDetails;
