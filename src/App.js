import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Game from './pages/Game';
import Config from './pages/Config';
import Feedback from './pages/Feedback';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={
              (props) => (<Login { ...props } />)
            }
          />
          <Route
            path="/game"
            render={
              (props) => (<Game { ...props } />)
            }
          />
          <Route
            path="/feedback"
            render={
              (props) => (<Feedback { ...props } />)
            }
          />
          <Route path="/config" component={ Config } />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
