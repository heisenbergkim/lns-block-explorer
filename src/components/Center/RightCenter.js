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
import { GET_TRANSACTIONS } from "components/queries";

const styles = theme => ({
  root: {
    // flexGrow: 1
    // textOverflow: "ellipsis"
    // overflow: "hidden"
    // fontSize: 12,
    // paddingLeft: theme.spacing,
    // paddingRight: theme.spacing,
    height: theme.height,
    textAlign: "left"
  },

  // container: {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(12, 1fr)",
  //   gridGap: `${theme.spacing.unit * 3}px`
  // },
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: "center",
    // color: theme.palette.text.secondary,
    // whiteSpace: "nowrap",
    // marginBottom: theme.spacing.unit,
    // overflowX: "auto"

    // width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  divider: {
    // margin: `${theme.spacing.unit * 4}px 2`
  },

  table: {
    fontFamily: theme.typography.fontFamily
    // minWidth: 100
  }
});

// //for testing...
// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// //for testing...
// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];

// import React from "react";
// import PropTypes from "prop-types";
const RightCenter = props => (
  <Query query={GET_TRANSACTIONS}>
    {({ loading, error, data }) => {
      const { classes } = props;
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      console.log(data);

      return (
        <Grid container justify="center" spacing={24}>
          {/* <Grid item xs={10} sm={6}> */}
          <Grid item xs sm={8}>
            <Paper className={classes.paper}>
              <Button color="inherit">Transactions</Button>
              <Table
                className={classes.table}
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="Left">Transaction Hash:</TableCell>
                    {/* <TableCell align="right">FromAddress</TableCell> */}
                    {/* <TableCell align="right">ToAddress</TableCell> */}
                    <TableCell align="Left">FromAddress</TableCell>
                    <TableCell align="Left">ToAddress</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.transactions.map(row => (
                    <TableRow key={row.blockNumber}>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          maxWidth: "5px",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                          // backgroundColor: "green"
                        }}
                      >
                        {row.transactionHash}
                      </TableCell>
                      <TableCell
                        align="Left"
                        style={{
                          maxWidth: "5px",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                          // backgroundColor: "green"
                        }}
                      >
                        {row.from}
                      </TableCell>
                      <TableCell
                        align="Left"
                        style={{
                          maxWidth: "5px",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                          // backgroundColor: "green"
                        }}
                      >
                        {row.to}
                      </TableCell>
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
    }}
  </Query>
);

export default withStyles(styles)(RightCenter);

// // export class Center extend
