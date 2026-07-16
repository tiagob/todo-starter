import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Todos from "./Todos";

let mockTodos = [
  { id: "1", name: "Active todo", complete: false },
  { id: "2", name: "Completed todo", complete: true }
];

jest.mock("../generated/graphql", () => ({
  TodosComponent: ({ children }: any) =>
    children({ data: { todos: mockTodos } })
}));

jest.mock("../components/CreateTodo", () => () => <div>Create todo</div>);
jest.mock("../components/Todo", () => ({ todo }: any) => (
  <li data-testid={`todo-${todo.id}`}>{todo.name}</li>
));

describe("Todos", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    mockTodos = [
      { id: "1", name: "Active todo", complete: false },
      { id: "2", name: "Completed todo", complete: true }
    ];
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });

  it("selects All by default and reports counts from every todo", () => {
    act(() => {
      ReactDOM.render(<Todos />, container);
    });

    const allButton = Array.from(container.querySelectorAll("button")).find(
      button => button.textContent === "All"
    );

    expect(allButton).toBeDefined();
    expect(allButton!.getAttribute("aria-pressed")).toBe("true");
    expect(container.querySelectorAll("[data-testid^='todo-']")).toHaveLength(
      2
    );
    expect(container.textContent).toContain("Total: 2");
    expect(container.textContent).toContain("Active: 1");
    expect(container.textContent).toContain("Completed: 1");
  });

  it("filters by completion without mutating the authoritative collection", () => {
    const originalTodos = mockTodos.slice();
    act(() => {
      ReactDOM.render(<Todos />, container);
    });

    const buttons = Array.from(container.querySelectorAll("button"));
    const activeButton = buttons.find(
      button => button.textContent === "Active"
    )!;
    const completedButton = buttons.find(
      button => button.textContent === "Completed"
    )!;

    act(() => activeButton.click());
    expect(activeButton.getAttribute("aria-pressed")).toBe("true");
    expect(container.textContent).toContain("Active todo");
    expect(container.textContent).not.toContain("Completed todo");
    expect(container.textContent).toContain("Total: 2");
    expect(container.textContent).toContain("Completed: 1");

    act(() => completedButton.click());
    expect(completedButton.getAttribute("aria-pressed")).toBe("true");
    expect(container.textContent).not.toContain("Active todo");
    expect(container.textContent).toContain("Completed todo");
    expect(mockTodos).toEqual(originalTodos);
  });

  it("reacts to add, complete, uncomplete, and delete collection updates", () => {
    act(() => {
      ReactDOM.render(<Todos />, container);
    });
    const activeButton = Array.from(container.querySelectorAll("button")).find(
      button => button.textContent === "Active"
    )!;
    act(() => activeButton.click());

    mockTodos = mockTodos.concat({
      id: "3",
      name: "New active todo",
      complete: false
    });
    act(() => {
      ReactDOM.render(<Todos />, container);
    });
    expect(container.textContent).toContain("Total: 3");
    expect(container.textContent).toContain("Active: 2");

    mockTodos = mockTodos.map(todo =>
      todo.id === "1" ? { ...todo, complete: true } : todo
    );
    act(() => {
      ReactDOM.render(<Todos />, container);
    });
    expect(container.textContent).toContain("Active: 1");
    expect(container.textContent).toContain("Completed: 2");
    expect(container.textContent).not.toContain("Active todo");

    mockTodos = mockTodos.map(todo =>
      todo.id === "2" ? { ...todo, complete: false } : todo
    );
    act(() => {
      ReactDOM.render(<Todos />, container);
    });
    expect(container.textContent).toContain("Active: 2");
    expect(container.textContent).toContain("Completed todo");

    mockTodos = mockTodos.filter(todo => todo.id !== "3");
    act(() => {
      ReactDOM.render(<Todos />, container);
    });
    expect(container.textContent).toContain("Total: 2");
    expect(container.textContent).toContain("Active: 1");
    expect(container.textContent).not.toContain("New active todo");
  });
});
