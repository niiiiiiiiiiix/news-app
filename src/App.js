import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Container from "@material-ui/core/Container";
import { useState } from "react";

function App() {
  const [country, setCountry] = useState("US");
  const [category, setCategory] = useState("");

  return (
    <Router>
      <Container maxWidth="lg">
        <Header
          category={category}
          setCountry={setCountry}
          setCategory={setCategory}
        />
        <Switch>
          <Route
            path="/"
            component={() => <HomePage category={category} country={country} />}
          />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
