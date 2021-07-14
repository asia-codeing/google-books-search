import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Jumbo from './components/Jumbotron/Jumbo';
import Search from './pages/Search'
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <>
        <Header/>
        <Jumbo />
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route path='/savedbooks'>
            <Saved />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
export default App;