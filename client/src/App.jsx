import React, { Component } from "react";
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
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/savedbooks">
            <Saved />
          </Route>
        </Switch>
      </>
    </Router>

    // <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to React</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js</code> and save to reload.
    //   </p>
    // </div>
  );
}


export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Header from './components/Header/Header';
// import BookBox from './components/BookBox/BookBox';
// import SavedBooks from './pages/SavedBooks';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header/>
//           <Switch>
//             <Route exact path="/" component={Books}>
//             </Route>
//             <Route exact path="/savedbooks" component={SavedBooks}>
//             </Route>
//           </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
