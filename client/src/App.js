import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/Search";
import SavedPage from "./pages/Saved";
import FourOFour from "./pages/404";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
          <Route component={FourOFour} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;