import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import backendAPI from "../backendAPI/newsapi";

export default function SearchResult(props) {
  const { country, category, keyWord } = props;
  const [searchData, setSearchData] = useState([]);

  const getData = () => {
    if (keyWord.length > 0) {
      backendAPI
        .headlines(
          country.toLowerCase(),
          category.toLowerCase(),
          keyWord.toLowerCase()
        )
        .then((res) => {
          if (res.data.status === "ok" && res.data.totalResults > 0) {
            setSearchData(res.data.articles);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {keyWord.length ? (
        <div>
          <Typography>
            Total search result for: {keyWord} is {searchData.length}
          </Typography>
          {searchData.map((article) => (
            <React.Fragment>
              <Link>{article.title}</Link>
              <Typography>{article.description}</Typography>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <Typography>Please input search term!</Typography>
      )}
    </Container>
  );
}
