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

import { Query } from "react-apollo";
import { GET_BLOCK_ONE } from "components/queries";

import { Link as RouterLink } from "react-router-dom";
import { Header, Center, Footer } from "components";

const styles = theme => ({
  root: {
    flexGrow: 1
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

const BlockOne = props => (
  <Query query={GET_BLOCK_ONE} variables={{props.match.params.BlockId}}>
    {({ loading, error, data }) => {
      const { classes } = props;
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      console.log(props.match.params.BlockId);
      console.log(data);

      return (
        <div>
          <Header />
          <Grid container justify="center" spacing={6}>
            <Grid item xs sm>
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
            </Grid>
          </Grid>
        </div>
      );
    }}
  </Query>
);

export default withStyles(styles)(BlockOne);

// // export class Center extend
