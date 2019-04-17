import React from "react";
// import PropTypes from "prop-types";
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
    // flexGrow: 1,
    // textOverflow: "ellipsis"
    // overflow: "hidden"
    // fontWeight: 'normal',
    // fontSize: 12,
    // paddingLeft: theme.spacing,
    // paddingRight: theme.spacing,
    height: theme.height,
    textAlign: "left"
  },

  // container: {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(12, 1fr)",
  //   gridGap: `${theme.spacing.unit * 1}px`
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
    // fontFamily: theme.typography.fontFamily
    // minWidth: 100
  }
});

function timeConverter(timeStamp) {
  var a = new Date(timeStamp * 1000);
  var months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = year + "년 " + month + date + "일 " + hour + ":" + min + ":" + sec;
  return time;
}
// console.log(timeConverter(123456));

// import React from "react";
// import PropTypes from "prop-types";
const LeftCenter = props => (
  <Query query={GET_BLOCKS}>
    {({ loading, error, data }) => {
      const { classes } = props;
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      console.log(data);

      // let tmpDate = this.data.timestamp;
      // let d = new Date(tmpDate * 1000);
      // tmpDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(); //ok ...it works

      return (
        <Grid container justify="center" spacing={24}>
          {/* <Grid item xs={10} sm={6}> */}
          <Grid item xs sm={8}>
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
                        {/* <TableCell> */}
                        <RouterLink to={`/blockone/${row.number}/`}>
                          {row.number}
                        </RouterLink>
                      </TableCell>
                      <TableCell
                        align="left"
                        style={{
                          maxWidth: "5px",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                          // backgroundColor: "green"
                        }}
                      >
                        {row.hash}
                      </TableCell>

                      <TableCell align="left">
                        {timeConverter(row.timestamp)}
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
              View All Blocks
            </Button>
          </Grid>
        </Grid>
      );
    }}
  </Query>
);

export default withStyles(styles)(LeftCenter);

// // export class Center extend
