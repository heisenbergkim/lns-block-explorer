import React, { Component } from "react";
import { Header, Center, Footer } from "components";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Center />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
