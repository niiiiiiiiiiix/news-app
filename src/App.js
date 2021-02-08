import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NarBar";

function App() {
  return (
    <Router>
      <Route
        path="/"
        render={({ match: { path } }) => (
          <NavBar>
            <Switch>
              <Route path={`${path}`} component={HomePage} />
            </Switch>
          </NavBar>
        )}
      />
    </Router>
  );
}

export default App;
