import React from "react";
import { createHistory, LocationProvider, Router } from "@reach/router";
import createHashSource from "hash-source";

// Components
// const Home = lazy(() => import("./routes/Home"));
import Home from "./routes/Home";

let source = createHashSource();
let history = createHistory(source);

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <LocationProvider history={history}>
          <div className="App" path="/">
            {/* <Suspense fallback={<h1>loading ...</h1>}> */}
            <Router>
              <Home path="/" />
            </Router>
            {/* </Suspense> */}
          </div>
        </LocationProvider>
      </React.StrictMode>
    );
  }
}

export default App;
