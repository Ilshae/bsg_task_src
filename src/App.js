import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Splash from './components/splash/splash.container';
import Home from './components/home/home.container';
import Player from './components/player/player';
import SignIn from './components/signin/signin.container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/player' component={Player} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
