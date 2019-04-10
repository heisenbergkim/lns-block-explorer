import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 22,
    paddingBottom: theme.spacing.unit * 2
  }
});

export class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div color="inherit">
        <Paper color="inherit" className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            This is a Footer.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
