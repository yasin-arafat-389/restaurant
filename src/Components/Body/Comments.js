import React from "react";
import dateFormat, { masks } from "dateformat";

const Comments = (props) => {
  return props.comments.map((comment) => {
    return (
      <div>
        <div class="card" key={comment.id}>
          <div class="card-header">Review</div>
          <div class="card-body">
            <h5 class="card-title">{comment.comment}</h5>
            <p class="card-text">Review by: {comment.author}</p>
            <p class="card-text">
              Date:{" "}
              {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </p>
            <button class="btn btn-primary">Rating: {comment.rating}/5</button>
          </div>
        </div>
      </div>
    );
  });
};

export default Comments;
