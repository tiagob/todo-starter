import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import CreateTodo from "./CreateTodo";

const mockCreateTodo = jest.fn(() => new Promise(() => undefined));

jest.mock("../generated/graphql", () => ({
  CreateTodoComponent: ({ children }: any) => children(mockCreateTodo),
  TodosDocument: {}
}));

describe("CreateTodo", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    mockCreateTodo.mockClear();
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(<CreateTodo />, container);
    });
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });

  it("preserves the add mutation variables", () => {
    const input = container.querySelector("input")!;

    act(() => {
      Simulate.change(input, { target: { value: "New todo" } } as any);
    });
    act(() => {
      Simulate.keyPress(input, { key: "Enter" } as any);
    });

    expect(mockCreateTodo).toHaveBeenCalledWith({
      variables: { name: "New todo" }
    });
  });
});
