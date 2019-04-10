import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Header, Center, Footer } from "./components";
import { Transactions, TransactionOne, BlockOne, Home } from "./routes";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route path="/transactions" component={Transactions} />
              <Route
                path={"/transactionone/:TxId"}
                component={TransactionOne}
              />
              <Route path={"/blockone/:BlockId"} component={BlockOne} />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
