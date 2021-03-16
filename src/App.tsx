import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";

// Components
// const Home = lazy(() => import("./components/Home"));
import OtherRoute from "./components/OtherRoute";
import Home from "./components/Home";

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <Router>
          <Header />
          {/* <Suspense fallback={<h1>loading ...</h1>}> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/other">
              <OtherRoute />
            </Route>
          </Switch>
          {/* </Suspense> */}
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
