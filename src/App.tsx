import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Landing from './Landing';
import Photos from './Photos';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={() => <Landing />} />
          <Route path="/photos" component={() => <Photos />} />
          <Route path="*" component={() => <Landing />} />
        </Switch>
      </HashRouter>
    </Provider>
  )
}

export default App;
