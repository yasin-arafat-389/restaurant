import DISHES from "../Data/Dishes";
import COMMENTS from "../Data/Comments";
import { combineReducers } from "redux";

const dishReducer = (dishState = DISHES, action) => {
  switch (action.type) {
    default:
      return dishState;
  }
};

const commentReducer = (commentState = COMMENTS, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      let comment = action.payload;
      comment.id = commentState.length;
      return commentState.concat(comment);

    default:
      return commentState;
  }
};

const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});

export default Reducer;
