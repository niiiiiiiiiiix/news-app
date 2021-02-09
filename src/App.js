import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Container from "@material-ui/core/Container";
function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
