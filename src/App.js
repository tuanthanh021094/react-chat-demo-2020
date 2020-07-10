import React from 'react';
import {
  Switch,
  Route,

} from 'react-router-dom';

import './App.css';
import AppContainer from './components/AppContainer/AppContainer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

const App = () => {
  return (
      <div className="App">
        <Switch>
          <Route exact path='/' 
              render={({location}) => 
              <AppContainer location={location}/>}
          />
          <Route path='/login' 
              render={() => <Login />}
          />
          <Route path='/signup'
              render={() => <Signup />}
          />
        </Switch>
      </div>
  )
}

export default App;
