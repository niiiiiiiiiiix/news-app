import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import SearchResult from "./components/SearchResult";
import NewsModal from "./components/NewsModal";

function App() {
  const [country, setCountry] = useState("US");
  const [category, setCategory] = useState("");
  const [keyWord, setKeyWord] = useState("");
  const [open, setOpen] = useState(false);
  const [article, setArticle] = useState("");

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
            exact
            component={() => (
              <SearchResult
                category={category}
                country={country}
                keyWord={keyWord}
                setOpen={setOpen}
                setArticle={setArticle}
              />
            )}
          />
          <Route
            path="/"
            exact
            component={() => (
              <HomePage
                category={category}
                country={country}
                setOpen={setOpen}
                setArticle={setArticle}
              />
            )}
          />
        </Switch>
        <NewsModal article={article} open={open} setOpen={setOpen} />
      </Container>
    </Router>
  );
}

export default App;
