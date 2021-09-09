import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Header } from "./components/Header";

// Components
// const Home = lazy(() => import("./components/Home"));
import Home from "./routes/Home";
import LikeDislike from "./routes/LikeDislike";

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <Router>
          {/* <Header /> */}
          {/* <Suspense fallback={<h1>loading ...</h1>}> */}
          <Switch>
            <Route exact path="/">
              {/* <Home /> */}
              <LikeDislike />
            </Route>
          </Switch>
          {/* </Suspense> */}
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
