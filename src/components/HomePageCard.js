import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
  },
  rootTitleContent: {
    height: 180,
  },
  rootTitle: {
    fontSize: 17,
    fontWeight: 500,
  },
  rootContent: {
    fontSize: 13,
    fontWeight: 300,
  },
  ReadMore: {
    color: "black",
    textAlign: "right",
    width: "100%",
  },
});

export default function HomePageCard() {
  const classes = useStyles();

  const [articleData, setArticleData] = useState([]);

  // for loop
  // axios
  const getData = () => {
    axios(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=486ec6ef7ca346e1b0e5c4c9bff5798e`
    )
      .then((res) => {
        if (res.data.status === "ok") {
          setArticleData(res.data.articles);
        }
        // console.log(articleData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  // useState to store the top 10 news

  return (
    <Grid container spacing={6}>
      {articleData.map((article) => (
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250vh"
                image={article.urlToImage}
              />
              <div className={classes.rootTitleContent}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.rootTitle}
                  >
                    <p>{article.title}</p>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.rootContent}
                  >
                    <p>{article.content}</p>
                  </Typography>
                </CardContent>
              </div>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className={classes.ReadMore}>
                Read More...
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
