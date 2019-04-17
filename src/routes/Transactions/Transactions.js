// import React, { Component } from "react";
import { Header, Footer } from "../../components";

// export class Transactions extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default Transactions;

//-----------------------------------------------

// import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GET_TRANSACTIONS } from "components/queries";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

import TableHead from "@material-ui/core/TableHead";
import Grid from "@material-ui/core/Grid";

import { Link as RouterLink } from "react-router-dom";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

// const TablePaginationActionsWrapped = withStyles(actionsStyles, {
//   withTheme: true
// })(Transactions);

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

let counter = 0;
function createData(name, calories, fat) {
  counter += 1;
  return { id: counter, name, calories, fat };
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

class Transactions extends React.Component {
  state = {
    testrows: [
      // createData("Cupcake", 305, 3.7),
      // createData("Donut", 452, 25.0),
      // createData("Eclair", 262, 16.0),
      // createData("Frozen yoghurt", 159, 6.0),
      // createData("Gingerbread", 356, 16.0),
      // createData("Honeycomb", 408, 3.2),
      // createData("Ice cream sandwich", 237, 9.0),
      // createData("Jelly Bean", 375, 0.0),
      // createData("KitKat", 518, 26.0),
      // createData("Lollipop", 392, 0.2),
      // createData("Marshmallow", 318, 0),
      // createData("Nougat", 360, 19.0),
      // createData("Oreo", 437, 18.0)
      createData("Cupcake", 305, 3.7, 67, 4.3),
      createData("Donut", 452, 25.0, 51, 4.9),
      createData("Eclair", 262, 16.0, 24, 6.0),
      createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
      createData("Gingerbread", 356, 16.0, 49, 3.9),
      createData("Honeycomb", 408, 3.2, 87, 6.5),
      createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      createData("Jelly Bean", 375, 0.0, 94, 0.0),
      createData("KitKat", 518, 26.0, 65, 7.0),
      createData("Lollipop", 392, 0.2, 98, 0.0),
      createData("Marshmallow", 318, 0, 81, 2.0),
      createData("Nougat", 360, 19.0, 9, 37.0),
      createData("Oreo", 437, 18.0, 63, 4.0)
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
    page: 0,

    count: 0,
    // rowsPerPage: 5
    rowsPerPage: 10
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render() {
    const { rowsPerPage, page } = this.state;

    return (
      <Query query={GET_TRANSACTIONS}>
        {({ loading, error, data }) => {
          const { classes } = this.props;
          if (loading) return "Loading...";
          // if (error) return `Error! ${error.message}`;
          const emptyRows =
            rowsPerPage -
            Math.min(rowsPerPage, data.length - page * rowsPerPage);
          console.log(data);
          let rows = data.length;

          return (
            <Grid container justify="center" spacing={24}>
              <Header />
              <Grid item xs sm={12}>
                <Paper className={classes.root}>
                  <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Transaction Hash</TableCell>
                          <TableCell align="left">FromAddress</TableCell>
                          <TableCell align="left">ToAddress </TableCell>
                          <TableCell align="left">Status </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.transactions.map(row => (
                          <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                              <RouterLink
                                to={`/transactionone/${row.transactionHash}/`}
                              >
                                {row.transactionHash}
                              </RouterLink>
                            </TableCell>
                            <TableCell align="left">{row.from}</TableCell>
                            <TableCell align="left">{row.to}</TableCell>
                            <TableCell align="left">
                              {JSON.stringify(row.status)}
                            </TableCell>
                            {/* <TableCell align="right">{row.fat}</TableCell> */}
                          </TableRow>
                        ))}
                        {emptyRows > 0 && (
                          <TableRow style={{ height: 48 * emptyRows }}>
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TablePagination
                            // rowsPerPageOptions={[5, 10, 25]}
                            rowsPerPageOptions={[10, 20, 30]}
                            colSpan={3}
                            // count={rows.length}
                            count={rows}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                              native: true
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActionsWrapped}
                          />
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          );
        }}
      </Query>
    );
  }
}

Transactions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Transactions);
