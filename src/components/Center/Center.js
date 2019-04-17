import React from "react";
import LeftCenter from "./LeftCenter";
import RightCenter from "./RightCenter";
// import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    // flexGrow: 1
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit}px`
  },
  paper: {
    // padding: theme.spacing.unit * 1,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

export class Center extends React.Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <LeftCenter />
        </Grid>
        <Grid item xs={6}>
          <RightCenter />
        </Grid>
      </Grid>
    );
  }
}

// export default Center;
Center.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Center);
