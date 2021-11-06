import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("text area", () => {
  // describe used to organise and also to avoid redundancy
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new comment",
      },
    });
    wrapped.update(); // re-render the component cause setState is async
  });
  it("has a text area that user has typed in something", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted, textarea gets emptied", () => {
    wrapped.find("textarea").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});

afterEach(() => {
  wrapped.unmount();
});
