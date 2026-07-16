import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import Todo from "./Todo";

const mockUpdateTodo = jest.fn();
const mockDestroyTodo = jest.fn();

jest.mock("../generated/graphql", () => ({
  UpdateTodoComponent: ({ children }: any) => children(mockUpdateTodo),
  DestroyTodoComponent: ({ children }: any) => children(mockDestroyTodo),
  TodosDocument: {}
}));

function renderTodo(complete: boolean, container: HTMLDivElement) {
  act(() => {
    ReactDOM.render(
      <Todo todo={{ id: "todo-1", name: "Test todo", complete } as any} />,
      container
    );
  });
}

describe("Todo", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    mockUpdateTodo.mockClear();
    mockDestroyTodo.mockClear();
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });

  it("preserves complete and uncomplete mutation variables", () => {
    renderTodo(false, container);
    const row = container.querySelector("input[type='checkbox']")!
      .parentElement!.parentElement!;
    act(() => {
      Simulate.click(row);
    });
    expect(mockUpdateTodo).toHaveBeenLastCalledWith({
      variables: { id: "todo-1", complete: true }
    });

    renderTodo(true, container);
    const updatedRow = container.querySelector("input[type='checkbox']")!
      .parentElement!.parentElement!;
    act(() => {
      Simulate.click(updatedRow);
    });
    expect(mockUpdateTodo).toHaveBeenLastCalledWith({
      variables: { id: "todo-1", complete: false }
    });
  });

  it("preserves delete mutation variables", () => {
    renderTodo(false, container);
    act(() => {
      Simulate.click(container.querySelector("button[aria-label='Delete']")!);
    });

    expect(mockDestroyTodo).toHaveBeenCalledWith({
      variables: { id: "todo-1" }
    });
  });
});
