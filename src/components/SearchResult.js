import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import backendAPI from "../backendAPI/newsapi";
const useStyles = makeStyles({
  link: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});
export default function SearchResult(props) {
  const classes = useStyles();
  const [api, setApi] = useState(false);
  const { country, category, keyWord, setOpen, setArticle } = props;
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
          setApi(true);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function handleClick(article, e) {
    e.preventDefault();
    setArticle(article);
    setOpen(true);
  }

  return (
    <Container>
      {api ? (
        "Please take out wallet and update your plan."
      ) : keyWord.length ? (
        <div>
          <Typography>
            Total search result for "{keyWord}" is {searchData.length}
          </Typography>
          {searchData.map((article) => (
            <React.Fragment>
              <Link
                onClick={(e) => handleClick(article, e)}
                className={classes.link}
              >
                {article.title}
              </Link>
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
