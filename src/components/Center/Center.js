import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(1fr, 1fr)",
    gridGap: `${theme.spacing.unit * 6}px`,
    alignItems: "center",
    justify: "center"
  },
  paper: {
    padding: theme.spacing.unit,
    // padding: theme.spacing.unit * 10,
    textAlign: "center",
    color: theme.palette.text.secondary,
    // whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit,
    marginTop: 10
    // height: "100%"
  },
  divider: {
    margin: `${theme.spacing.unit * 4}px 2`
  },

  table: {
    fontFamily: theme.typography.fontFamily,
    minWidth: 340
  }
});

//for testing...
let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

//for testing...
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export class Center extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Button color="inherit">Latest Blocks</Button>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Block Number </TableCell>
                  <TableCell align="right">TimeStamp</TableCell>
                  <TableCell align="right">Transactions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Button
            fullWidth="true"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            View All Blocks
          </Button>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>
            <Button color="inherit">Transactions</Button>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Transaction Hash:</TableCell>
                  <TableCell align="right">FromAddress</TableCell>
                  <TableCell align="right">ToAddress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Button
            fullWidth="true"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            View All Transactions
          </Button>
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
