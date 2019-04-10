import React from "react";
import PropTypes from "prop-types";

const TransactionOne = props => {
  // const { TxI } = props;
  console.log("TxId :", props.match.params.TxId);
  // console.log(TxI.TxId);
  return <div>Hello TransactionOne</div>;
};

TransactionOne.propTypes = {};

export default TransactionOne;
