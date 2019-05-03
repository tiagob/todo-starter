import React, { ReactNode } from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Typography,
  Toolbar,
  createStyles,
  WithStyles,
  withStyles,
  Button,
  Link
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Page } from "../constants";

const styles = createStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
});

interface Props extends WithStyles<typeof styles> {
  children?: ReactNode;
  ToolbarIcon?: ReactNode;
  padding?: boolean;
}

const Header = ({ classes }: Props) => (
  <AppBar>
    <Toolbar className={classes.toolbar}>
      <Link
        component={props => <RouterLink {...props} to="/" />}
        color="inherit"
      >
        <Typography variant="h6" color="inherit">
          Todos
        </Typography>
      </Link>
      <Button
        color="inherit"
        component={props => <RouterLink {...props} to={`/${Page.about}`} />}
      >
        About
      </Button>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
