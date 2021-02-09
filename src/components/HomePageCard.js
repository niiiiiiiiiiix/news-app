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
import backendAPI from "../backendAPI/newsapi";
const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
  },
});

export default function HomePageCard(props) {
  const classes = useStyles();
  const { articleData } = props;
  // useState to store the top 10 news

  return (
    <Grid container spacing={6}>
      {articleData.map((article) => (
        <Grid item xs={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50%"
                image={article.urlToImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <p>{article.title}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p>{article.description}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Read More...
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
