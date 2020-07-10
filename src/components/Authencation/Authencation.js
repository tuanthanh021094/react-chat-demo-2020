import React from 'react';
import './Authencation.css';
import {Switch, Route } from 'react-router-dom';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const Authencation = (props) => {
  let {cookies} = props;
  return(
    <div className="Authencation">
      
      <Switch>
        <Route exact path="/" render={() => <Login cookies={cookies}/>} />
        <Route path="/signup" render={() => <Signup cookies={cookies} />} />
      </Switch>
    </div>
  )
}

export default Authencation;