import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomePageCard from "./HomePageCard";
import backendAPI from "../backendAPI/newsapi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function HomePage(props) {
  const [articleData, setArticleData] = useState([]);
  const classes = useStyles();
  const { country, category } = props;

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
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.root}>
      <HomePageCard articleData={articleData} />
    </div>
  );
}
