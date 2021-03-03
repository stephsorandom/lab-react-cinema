import React, { Component } from 'react';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className='App'>
         <Switch>
          <Route exact path='/' render={(props) =>  <Home {...props} /> } />
          <Route exact path='/CheckMovies' render={(props) =>  <CheckMovies {...props} /> } />
          <Route exact path='/AddMovie' render={(props) =>  <AddMovie {...props} /> } />
          <Route exact path='/Movie/:id' render={(props) =>  <MovieInfo {...props} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
