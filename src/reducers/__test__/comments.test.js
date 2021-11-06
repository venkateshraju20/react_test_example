import commentsReducers from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handle action type of SAVE_COMMENT", () => {
  const actions = {
    type: SAVE_COMMENT,
    payload: "new comment",
  };

  const newState = commentsReducers([], actions);

  expect(newState).toEqual(["new comment"]);
});
