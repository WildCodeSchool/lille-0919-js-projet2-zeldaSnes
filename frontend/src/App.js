import React from 'react';
import './index.css';
import Gamepage from './Gamepage';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage'

function App() {

  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/Gamepage' component={Gamepage} />
    </Switch>
  )
}


export default App;