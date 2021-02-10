import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import backendAPI from "../backendAPI/newsapi";

export default function SearchResult(props) {
  const { country, category, keyWord } = props;
  const [searchData, setSearchData] = useState([]);
  const getData = () => {
    backendAPI
      .headlines(country.toLowerCase(), category.toLowerCase(), keyWord)
      .then((res) => {
        if (res.data.status === "ok" && res.data.totalResults > 0) {
          setSearchData(res.data.articles);
          console.log(searchData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {searchData.map((article) => (
        <React.Fragment>
          <Link>{article.title}</Link>
          <Typography>{article.description}</Typography>
        </React.Fragment>
      ))}
    </Container>
  );
}
