import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Landing from './Landing';
import Photos from './Photos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/photos" component={() => <Photos />} />
        <Route path="*" component={() => <Landing />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
