import React from "react";
import {
  withStyles,
  List,
  WithStyles,
  createStyles,
  Paper,
  Theme
} from "@material-ui/core";
import Todo from "../components/Todo";
import { TodosComponent } from "../generated/graphql";
import CreateTodo from "../components/CreateTodo";

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      padding: spacing.unit,
      width: "80%"
    }
  });

const Todos = ({ classes }: WithStyles<typeof styles>) => (
  <Paper className={classes.root}>
    <CreateTodo />
    <TodosComponent>
      {({ data }) => (
        <List>
          {(data && data.todos ? data.todos : []).map((todo, index) => (
            <Todo todo={todo} key={index} />
          ))}
        </List>
      )}
    </TodosComponent>
  </Paper>
);

export default withStyles(styles)(Todos);
