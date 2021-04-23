import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Main } from './Main'
import { Login } from './Login'
import { Profile } from './Profile'
import React from 'react'

function App() {

  return (
    <>
      <Router>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/login">Login</Link></li>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/login' component={Login} /> 
          <Route path='/profile' component={Profile} > </Route>
        </Switch>
      </Router>
    </>
  );
}

export default React.memo(App);
