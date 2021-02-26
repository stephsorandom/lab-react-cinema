import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/HomePage';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar />
      <h1>Cinema App!</h1>
      <Switch>
        <Route exact path="/" render={(props) => < Home {...props} />} />
        {/* <Route exact path="/movie" render={(props) => < Movie {...props} />} /> */}
      </Switch>
    </div>
  );
}

export default App;