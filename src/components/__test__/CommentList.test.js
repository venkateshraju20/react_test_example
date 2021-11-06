import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

it("has ul and li tag in component", () => {
  expect(wrapped.find("ul").length).toEqual(1);
  expect(wrapped.find("li").length).toEqual(2);
});

it("show comment from the list", () => {
  expect(wrapped.render().text()).toContain("create comment");
  expect(wrapped.render().text()).toContain("read comment");
});

afterEach(() => {
  wrapped.unmount();
});
