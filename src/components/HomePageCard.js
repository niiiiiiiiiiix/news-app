import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  rootTitleContent: {
    minHeight: 153.141,
    userSelect: "text",
    "&:hover": {
      cursor: "auto",
    },
    "&:last-child": {
      paddingBottom: 16,
    },
  },

  rootTitleTitle: {
    fontSize: 17,
    fontWeight: 600,
    marginTop: 4,
    marginBottom: 4,
    minHeight: 44,
  },
  rootTitleSource: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: "0.8rem",
    color: "grey",
    fontWeight: "bold",
  },
  rootTitleDate: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: "0.8rem",
    color: "grey",
    // fontWeight: "bold",
    fontWeight: 400,
  },
  rootContent: {
    fontSize: 13,
    fontWeight: 300,
    marginBottom: 0,
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
              <div>
                <CardContent className={classes.rootTitleContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    <p className={classes.rootTitleTitle}>
                      {article.title.substring(0, article.title.indexOf(" - "))}
                    </p>
                    <p className={classes.rootTitleSource}>
                      {article.source.name}
                    </p>
                    <p className={classes.rootTitleDate}>
                      {moment(article.publishedAt)
                        .format("DD MMM YYYY, h:mm A")
                        .toUpperCase()}
                    </p>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <p className={classes.rootContent}>
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
