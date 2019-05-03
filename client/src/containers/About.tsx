import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, WithStyles, withStyles, Link } from "@material-ui/core";

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
      github
    </Typography>
    <Link href="https://github.com/tiagob/ts-react-apollo-node" target="_blank">
      https://github.com/tiagob/ts-react-apollo-node
    </Link>
  </div>
);

export default withStyles(styles)(About);
