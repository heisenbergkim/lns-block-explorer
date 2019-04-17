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
import { GET_BLOCK_ONE } from "components/queries";

// import { Link as RouterLink } from "react-router-dom";
import { Header, Center, Footer } from "components";
import BlockCard from "components/BlockCard/BlockCard";

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

const BlockOne = props => (
  <Query
    query={GET_BLOCK_ONE}
    variables={{ BlockId: parseInt(props.match.params.BlockId) }}
  >
    {({ loading, error, data }) => {
      const { classes } = props;
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      // console.log(props.match.params.BlockId);
      // console.log(data);

      return (
        <div>
          <Header />
          <Grid container justify="center" spacing={24}>
            {/* <Grid item xs sm={12}> */}

            <Paper className={classes.paper}>
              <BlockCard
                name={data.block.number}
                timestamp={data.block.timestamp}
              />
              {/* <FormControl className={classes.margin}> */}
              <Grid>
                <TextField
                  id="standard-read-only-input"
                  label="hash"
                  value={data.block.hash}
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
                  label="parentHash"
                  value={data.block.parentHash}
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
                  label="mixHash"
                  value={data.block.mixHash}
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
                  label="nonce"
                  value={data.block.nonce}
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
                  label="sha3Uncles"
                  value={data.block.sha3Uncles}
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
                  label="logsBloom"
                  value={data.block.logsBloom}
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
                  label="transactionsRoot"
                  value={data.block.transactionsRoot}
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
                  label="stateRoot"
                  value={data.block.stateRoot}
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
                  label="receiptsRoot"
                  value={data.block.receiptsRoot}
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
                  label="miner"
                  value={data.block.miner}
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
                  label="difficulty"
                  value={data.block.difficulty}
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
              </Grid>
            </Paper>
          </Grid>
        </div>
      );
    }}
  </Query>
);

export default withStyles(styles)(BlockOne);
