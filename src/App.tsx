import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
const Home = lazy(() => import("./components/Home"));

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <Router>
          <Suspense fallback={<h1>loading ...</h1>}>
            <Switch>
              <Route>
                <Home exact path="/" />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
