import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomePageCard from "./HomePageCard";
import backendAPI from "../backendAPI/newsapi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  articleSection: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
}));

export default function HomePage(props) {
  const [articleData, setArticleData] = useState([]);
  const [api, setApi] = useState(false);
  const classes = useStyles();
  const { country, category, setOpen, setArticle } = props;

  const getData = () => {
    backendAPI
      .headlines(country.toLowerCase(), category.toLowerCase())
      .then((res) => {
        if (res.data.status === "ok") {
          setArticleData(res.data.articles);
        }
      })
      .catch((error) => {
        console.error(error);
        setApi(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={classes.articleSection}>
      <div className={classes.root}>
        {api ? (
          "Please take out wallet and update your plan."
        ) : (
          <HomePageCard
            articleData={articleData}
            setOpen={setOpen}
            setArticle={setArticle}
          />
        )}
      </div>
    </section>
  );
}
