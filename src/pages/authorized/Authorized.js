/* @flow */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product'

export default class Authorized extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/admin/dashboard' component={Dashboard}/>
          <Route path='/admin/product' component={Product}/>
        </Switch>
      </div>
    );
  }
}
