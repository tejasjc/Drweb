import React, { Component } from "react";
import { Route,withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import Layouts from "./Layout";
import Analysis_count from "./Analysis_count";


export class Stat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layouts>
       
        <Route path="/stat/analysis_count" component={withRouter(Analysis_count)} />
        
        
      </Layouts>
    );
  }
}

export default Stat;
