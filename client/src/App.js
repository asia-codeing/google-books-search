import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Header from './components/Header/Header';
import BookBox from './components/BookBox/BookBox';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <BookBox/>
        {/* <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
