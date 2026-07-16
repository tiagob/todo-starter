import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  List,
  Paper,
  Theme,
  Typography,
  makeStyles
} from "@material-ui/core";
import Todo from "../components/Todo";
import { TodosComponent } from "../generated/graphql";
import CreateTodo from "../components/CreateTodo";

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    padding: spacing(1),
    width: "80%"
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: spacing(1)
  }
}));

type Filter = "all" | "active" | "completed";

const filters: Array<{ label: string; value: Filter }> = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" }
];

export default function Todos() {
  const classes = useStyles();
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <Paper className={classes.root}>
      <CreateTodo />
      <TodosComponent>
        {({ data }) => {
          const todos = data && data.todos ? data.todos : [];
          const activeCount = todos.filter(todo => !todo.complete).length;
          const completedCount = todos.length - activeCount;
          const visibleTodos = todos.filter(todo => {
            if (filter === "active") {
              return !todo.complete;
            }
            if (filter === "completed") {
              return todo.complete;
            }
            return true;
          });

          return (
            <>
              <div className={classes.controls}>
                <ButtonGroup aria-label="Filter todos">
                  {filters.map(({ label, value }) => (
                    <Button
                      key={value}
                      aria-pressed={filter === value}
                      variant={filter === value ? "contained" : "outlined"}
                      onClick={() => setFilter(value)}
                    >
                      {label}
                    </Button>
                  ))}
                </ButtonGroup>
                <Typography aria-live="polite">
                  Total: {todos.length} · Active: {activeCount} · Completed:{" "}
                  {completedCount}
                </Typography>
              </div>
              <List>
                {visibleTodos.map(todo => (
                  <Todo todo={todo} key={todo.id} />
                ))}
              </List>
            </>
          );
        }}
      </TodosComponent>
    </Paper>
  );
}
