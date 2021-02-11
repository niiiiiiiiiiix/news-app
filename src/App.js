import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ArticlePage from "./components/ArticlePage";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import SearchResult from "./components/SearchResult";

function App() {
  const [country, setCountry] = useState("US");
  const [category, setCategory] = useState("");
  const [keyWord, setKeyWord] = useState("");

  return (
    <Router>
      <Container maxWidth="lg">
        <Header
          category={category}
          keyWord={keyWord}
          setCountry={setCountry}
          setCategory={setCategory}
          setKeyWord={setKeyWord}
        />
        <Switch>
          <Route
            path="/search"
            component={() => (
              <SearchResult
                category={category}
                country={country}
                keyWord={keyWord}
              />
            )}
          />
          <Route
            path="/"
            exact
            component={() => <HomePage category={category} country={country} />}
          />
          <Route
            path="/article"
            exact
            component={() => (
              <ArticlePage category={category} country={country} />
            )}
          />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
