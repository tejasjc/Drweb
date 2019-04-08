import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Info from "./info";


export default class Content extends React.Component {
  
  render() {
    const dir = this.props.path;   
    return (
      <Router>
        <div>
          <Route exact path={`${dir}`} component={Info} />
          
        </div>
      </Router>
    );
  }
}
