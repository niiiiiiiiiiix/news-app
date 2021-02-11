import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import backendAPI from "../backendAPI/newsapi";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

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

export default function ArticlePage(props) {
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
  });

  return (
    <section className={classes.articleSection}>
      <div className={classes.root}>
        <Grid container spacing={12}>
          <Card className={classes.root}>
            <CardMedia
              component="img"
              height="auto"
              image={articleData[0]?.urlToImage}
            />
            <div>
              <CardContent className={classes.rootTitleContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  <p className={classes.rootTitleTitle}>
                    {articleData[0]?.title.substring(
                      0,
                      articleData[0]?.title.indexOf(" - ")
                    )}
                  </p>
                  <p className={classes.rootTitleSource}>
                    {articleData[0]?.source.name}
                  </p>
                  <p className={classes.rootTitleDate}>
                    {moment(articleData[0]?.publishedAt)
                      .format("DD MMM YYYY, h:mm A")
                      .toUpperCase()}
                  </p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <p className={classes.rootContent}>
                    {articleData[0]?.content}
                    <br></br>
                    <br></br>
                    Habitasse aptent donec integer. Per in turpis netus? Metus
                    tempor potenti nisi. Tristique, eros molestie platea ante
                    quam class hendrerit interdum gravida nullam tristique
                    placerat. Viverra massa molestie ridiculus sollicitudin cras
                    proin sociosqu. Sem adipiscing aptent augue aliquet
                    suspendisse primis. Sociosqu faucibus vel laoreet natoque,
                    sed donec felis nam. Lectus accumsan maecenas purus, primis
                    bibendum donec habitant lectus ridiculus. Inceptos tempus
                    quam tortor a torquent metus donec faucibus. Nunc rhoncus
                    sem torquent. Netus taciti porttitor dolor justo vivamus a
                    luctus taciti semper. Porttitor fermentum interdum integer.
                    Vestibulum enim lacinia amet lobortis mauris litora
                    condimentum massa. Iaculis dapibus sociis praesent per
                    nullam scelerisque pellentesque ad turpis. Orci tempus
                    magnis pulvinar ullamcorper dis dapibus. Quisque vestibulum
                    est porta dolor mus! Lorem magnis ligula taciti. Quam fames
                    eu sodales laoreet lectus a? Est ad nisl torquent dapibus.
                    Vulputate class purus cubilia fermentum aliquam, a habitant
                    lacus pharetra quisque suspendisse. Libero, sociosqu class
                    aliquam. Porttitor venenatis semper mattis dapibus. Nascetur
                    adipiscing tincidunt tempus faucibus condimentum suspendisse
                    nec varius accumsan lacus tincidunt. Sagittis conubia congue
                    adipiscing velit suscipit eleifend rhoncus id tempor. Nulla,
                    diam lobortis neque est mattis. Laoreet per arcu cursus
                    cubilia mollis integer conubia pharetra ut imperdiet.
                    Curabitur magna nec posuere nunc litora urna auctor. Sem
                    nisl scelerisque nunc semper elementum. Non, in risus cursus
                    ut. Dignissim lorem quam ridiculus pharetra montes nascetur
                    vestibulum! Purus congue in potenti pellentesque condimentum
                    aenean. Ultricies elementum praesent sed ipsum nascetur
                    vulputate vulputate sollicitudin porttitor bibendum
                    sollicitudin. Donec phasellus natoque consectetur vitae
                    suscipit lorem dui lectus rutrum.
                    <br></br>
                    <br></br>
                    Habitasse aptent donec integer. Per in turpis netus? Metus
                    tempor potenti nisi. Tristique, eros molestie platea ante
                    quam class hendrerit interdum gravida nullam tristique
                    placerat. Viverra massa molestie ridiculus sollicitudin cras
                    proin sociosqu. Sem adipiscing aptent augue aliquet
                    suspendisse primis. Sociosqu faucibus vel laoreet natoque,
                    sed donec felis nam. Lectus accumsan maecenas purus, primis
                    bibendum donec habitant lectus ridiculus. Inceptos tempus
                    quam tortor a torquent metus donec faucibus. Nunc rhoncus
                    sem torquent. Netus taciti porttitor dolor justo vivamus a
                    luctus taciti semper. Porttitor fermentum interdum integer.
                    Vestibulum enim lacinia amet lobortis mauris litora
                    condimentum massa. Iaculis dapibus sociis praesent per
                    nullam scelerisque pellentesque ad turpis. Orci tempus
                    magnis pulvinar ullamcorper dis dapibus. Quisque vestibulum
                    est porta dolor mus! Lorem magnis ligula taciti. Quam fames
                    eu sodales laoreet lectus a? Est ad nisl torquent dapibus.
                    Vulputate class purus cubilia fermentum aliquam, a habitant
                    lacus pharetra quisque suspendisse. Libero, sociosqu class
                    aliquam. Porttitor venenatis semper mattis dapibus. Nascetur
                    adipiscing tincidunt tempus faucibus condimentum suspendisse
                    nec varius accumsan lacus tincidunt. Sagittis conubia congue
                    adipiscing velit suscipit eleifend rhoncus id tempor. Nulla,
                    diam lobortis neque est mattis. Laoreet per arcu cursus
                    cubilia mollis integer conubia pharetra ut imperdiet.
                    Curabitur magna nec posuere nunc litora urna auctor. Sem
                    nisl scelerisque nunc semper elementum. Non, in risus cursus
                    ut. Dignissim lorem quam ridiculus pharetra montes nascetur
                    vestibulum! Purus congue in potenti pellentesque condimentum
                    aenean. Ultricies elementum praesent sed ipsum nascetur
                    vulputate vulputate sollicitudin porttitor bibendum
                    sollicitudin. Donec phasellus natoque consectetur vitae
                    suscipit lorem dui lectus rutrum.
                  </p>
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </div>
    </section>
  );
}
