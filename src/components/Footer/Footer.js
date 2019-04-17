import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    // width: 1400,
    // fontSize: 12,
    // paddingLeft: theme.spacing,
    // paddingRight: theme.spacing,
    // height: theme.height,
    textAlign: "center",
    // margin: "20%",
    // ...theme.typography.button,
    // backgroundColor: theme.palette.common.green,
    padding: theme.spacing.unit,
    color: "white",
    backgroundColor: "#3949ab",
    width: "100%",
    marginTop: theme.spacing.unit * 20,
    marginBottom: 0
  }
});

class Footer extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom color="inherit">
          This is Footer
        </Typography>
        {/* {"This div's text looks like that of a button."} */}
        {/* <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
          // color="green"
          fullWidth="true"
        >
          <BottomNavigationAction
            alignment="center"
            label="Recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation> */}

        <Typography variant="h8" gutterBottom>
          Copyright © LNSTVholdings.Inc 2000
        </Typography>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
