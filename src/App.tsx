import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Landing from './Landing';
import Photos from './Photos';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={() => <Landing />} />
        <Route path="/photos" component={() => <Photos />} />
        <Route path="*" component={() => <Landing />} />
      </Switch>
    </HashRouter>
  )
}

export default App;
