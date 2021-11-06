import Axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENT } from "actions/types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComments() {
  const response = Axios.get(
    "http://jsonplaceholder.typicode.com/posts/1/comments"
  );
  return {
    type: FETCH_COMMENT,
    payload: response,
  };
}
