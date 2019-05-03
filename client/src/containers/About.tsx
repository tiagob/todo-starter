import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";

const styles = createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

const About = ({ classes }: WithStyles<typeof styles>) => (
  <div className={classes.root}>
    <Typography variant="h6" gutterBottom>
      created by
    </Typography>
    <div>tiago.bndr@gmail.com</div>
  </div>
);

export default withStyles(styles)(About);
