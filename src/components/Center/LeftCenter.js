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

// import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GET_BLOCKS } from "components/queries";

import { Link as RouterLink } from "react-router-dom";
// import Link from "@material-ui/core/Link";

const styles = theme => ({
  root: {
    flexGrow: 1
    // flexDirection="row"
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit
  },
  divider: {
    margin: `${theme.spacing.unit * 4}px 2`
  },

  table: {
    fontFamily: theme.typography.fontFamily,
    minWidth: 100
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

// import React from "react";
// import PropTypes from "prop-types";
const LeftCenter = props => (
  <Query query={GET_BLOCKS}>
    {({ loading, error, data }) => {
      const { classes } = props;
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      console.log(data);

      return (
        <Grid container justify="center" spacing={6}>
          <Grid item xs={10} sm={6}>
            <Paper className={classes.paper}>
              <Button color="inherit">Latest Blocks</Button>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Block Number </TableCell>
                    <TableCell align="left">Hash</TableCell>
                    <TableCell align="left">TimeStamp</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.blocks.map(row => (
                    <TableRow key={row.number}>
                      <TableCell component="th" scope="row">
                        {row.number}
                      </TableCell>
                      <TableCell align="left">
                        <RouterLink to="transactions">{row.hash}</RouterLink>
                      </TableCell>

                      <TableCell align="left">{row.timestamp}</TableCell>
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

          {/* <Grid item xs>
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
                  {data.transactions.map(row => (
                    <TableRow key={row.blockNumber}>
                      <TableCell component="th" scope="row">
                        {row.transactionHash}
                      </TableCell>
                      <TableCell align="right">{row.from}</TableCell>
                      <TableCell align="right">{row.to}</TableCell>
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
          </Grid> */}
        </Grid>
      );
    }}
  </Query>
);

export default withStyles(styles)(LeftCenter);

// // export class Center extend
