import React from 'react'
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import Home from '@/pages/home'

export default class Router extends React.Component{
  render () {
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}/>
        <Redirect to="/home"/>
      </Switch>
    </BrowserRouter>
  }
}