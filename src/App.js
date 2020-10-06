import React from 'react';
import Home from './Home'
import {Route, Switch, Redirect} from 'react-router-dom'

// Redirect는 말 그대로 Redirect를 시켜주는 거다. 코드에 있는 그대로라
// 뭐 따로 설명할건 없다.

const App = () => { 

  return (
    <Switch>
      <Redirect exact from="/home" to="/home/about"/>
      <Route exact path="/home/:page?" render={props => <Home {...props} />}/>
    </Switch>
  )
};

export default App;
