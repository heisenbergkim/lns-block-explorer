import React from "react";
import LeftCenter from "./LeftCenter";
import RightCenter from "./RightCenter";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export class Center extends React.Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <LeftCenter />
          <RightCenter />
        </Grid>
      </div>
    );
  }
}

export default Center;
