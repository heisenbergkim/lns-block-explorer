// import React from "react";
// import PropTypes from "prop-types";

// const TransactionOne = props => {
//   console.log("Hello TxId :", props.match.params.TxId);
//   return <div>Hello TransactionOne</div>;
// };

// TransactionOne.propTypes = {};

// export default TransactionOne;

import React from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
// import Input from "@material-ui/core/Input";

import { Query } from "react-apollo";
import { GET_TRANSACTION_ONE } from "components/queries";

// import { Link as RouterLink } from "react-router-dom";
import { Header, Center, Footer } from "components";
// import BlockCard from "components/BlockCard/BlockCard";
import TransactionCard from "components/TransactionCard/TransactionCard";

const styles = theme => ({
  root: {
    flexGrow: 2
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr, 1fr)",
    // gridTemplateColumns: "repeat(auto-fill, 100px)",

    gridGap: `${theme.spacing.unit * 3}px`
  },

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit,
    // height: 140,
    width: 700
  },

  textField: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 600
  },

  divider: {
    margin: `${theme.spacing.unit * 4}px 2`
  }
});

const TransactionOne = props => (
  <Query
    query={GET_TRANSACTION_ONE}
    variables={{ TxId: props.match.params.TxId }}
    // variables={{ BlockId: parseInt("3") }}
  >
    {({ loading, error, data }) => {
      const { classes } = props;
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      console.log(props.match.params.TxId);
      console.log(data);

      return (
        <div>
          <Header />
          <Grid container justify="center" spacing={28}>
            {/* <Grid item xs sm={12}> */}

            <Paper className={classes.paper}>
              <TransactionCard
                name={data.transaction.transactionHash}
                blocknumber={data.transaction.blockNumber}
              />
              {/* <FormControl className={classes.margin}> */}
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="transactionHash"
                  value={data.transaction.transactionHash}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  // fullWidth
                  id="standard-read-only-input"
                  label="blockHash"
                  value={data.transaction.blockHash}
                  className={classes.textField}
                  // InputProps={{
                  //   readOnly: true
                  // }}
                />
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  id="standard-read-only-input"
                  label="blockNumber"
                  value={data.transaction.blockNumber}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="from"
                  value={data.transaction.from}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="to"
                  value={data.transaction.to}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="gasUsed"
                  value={data.transaction.gasUsed}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="cumulativeGasUsed"
                  value={data.transaction.cumulativeGasUsed}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="status"
                  value={data.transaction.status}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="v:"
                  value={data.transaction.v}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="r:"
                  value={data.transaction.r}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="s:"
                  value={data.transaction.s}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              {/* <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="totalDifficulty"
                  value={data.block.totalDifficulty}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="extraData"
                  value={data.block.extraData}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="size"
                  value={data.block.size}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="gasLimit"
                  value={data.block.gasLimit}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="gasUsed"
                  value={data.block.gasUsed}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="timestamp"
                  value={data.block.timestamp}
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Grid> */}
            </Paper>
          </Grid>
        </div>
      );
    }}
  </Query>
);

export default withStyles(styles)(TransactionOne);
