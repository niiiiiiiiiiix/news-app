import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../App.css";

const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  rootTitleContent: {
    paddingBottom: 0,
    userSelect: "text",
    "&:hover": {
      cursor: "auto",
      // textDecoration: "underline",
    },
  },
  rootTitle: {
    fontSize: 17,
    fontWeight: 500,
  },
  rootContent: {
    fontSize: 13,
    fontWeight: 300,
  },
  rootButton: {
    padding: 0,
    fontSize: "0.6125rem",
  },
  rootButtonLink: {
    textDecoration: "none",
    color: "grey",
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
});

export default function HomePageCard(props) {
  const classes = useStyles();
  const { articleData } = props;

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
                    <p>
                      {article.content?.substring(0, 200)}
                      <Button
                        size="small"
                        color="primary"
                        className={classes.rootButton}
                      >
                        <a
                          href={article.url}
                          rel={"noreferrer"}
                          target={"_blank"}
                          className={classes.rootButtonLink}
                        >
                          read more
                        </a>
                      </Button>
                    </p>
                  </Typography>
                </CardContent>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
