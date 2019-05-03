export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  createTodo: Todo;
  updateTodo: Todo;
  destroyTodo: Todo;
};

export type MutationCreateTodoArgs = {
  name: Scalars["String"];
};

export type MutationUpdateTodoArgs = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  complete?: Maybe<Scalars["Boolean"]>;
};

export type MutationDestroyTodoArgs = {
  id: Scalars["Int"];
};

export type Query = {
  todos: Array<Todo>;
};

export type Todo = {
  id: Scalars["Int"];
  name: Scalars["String"];
  complete: Scalars["Boolean"];
};
