/* @flow */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import RequireAuth from '../helper/requireAuth'
import Authorized from './authorized/Authorized';
import Login from './unauthorized/Login'
import Register from './unauthorized/Register'

export default class Main extends Component {

  render() {
    return (
      <Switch>
        <Route path='/admin' component={RequireAuth(Authorized)} />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch>
    )
  }
}
