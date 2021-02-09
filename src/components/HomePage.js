import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomePageCard from "./HomePageCard";

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

export default function HomePage() {
  const classes = useStyles();

  // const NewsCard = (HomePageCard) => {
  //   // HomePageCard.forEach((element, index) => console.log(index));
  //   console.log(HomePageCard);
  // };

  // NewsCard();

  return (
    <section className={classes.articleSection}>
      <div className={classes.root}>
        <HomePageCard />
        {/* <Grid container spacing={6}>
        <Grid item xs={6}>
          <Paper className={classes.paper} component={HomePageCard}></Paper>
        </Grid>
        <Grid item xs={6}>
          <HomePageCard />
        </Grid>
      </Grid> */}
      </div>
    </section>
  );
}
