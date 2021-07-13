import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Header from './components/Header/Header';
import BookBox from './components/BookBox/BookBox';
import SavedBooks from './pages/SavedBooks';

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Switch>
            <Route exact path="/" component={Books}>
            </Route>
            <Route exact path="/savedbooks" component={SavedBooks}>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
