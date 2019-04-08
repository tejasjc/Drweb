import React from 'react';

import {Route } from 'react-router-dom';

import Info from './component/info';
import {Switch} from 'react-router';
import home from './component/home';
import Stat from './component/Stat';


export default class App extends React.Component {
  
  render() {
    return (
      
      <div className="App">
        <Switch>
        <Route exact path="/" component={home}/>
        <Route path="/main" component={Info}/>
        <Route path="/stat" component={Stat}/>
        </Switch>
      </div>
      
    );
  }
}


