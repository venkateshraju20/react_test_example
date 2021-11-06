import { SAVE_COMMENT } from "actions/types";

import { saveComment } from "actions";

describe("save comment", () => {
  it("has the correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = saveComment("test action");
    expect(action.payload).toEqual("test action");
  });
});
