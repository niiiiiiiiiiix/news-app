import React from "react";
import { Grid } from "@material-ui/core";
import NavBarComp from "./NavBarComp";

function NavBar({ children }) {
  return (
    <Grid container style={{ flexWrap: "nowrap" }}>
      <NavBarComp />
      {children}
    </Grid>
  );
}

export default NavBar;
