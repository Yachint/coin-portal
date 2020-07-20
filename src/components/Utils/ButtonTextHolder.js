import React from "react";
import { Grid } from "@material-ui/core";

const u = 5;
const l = 5;

const ButtonTextHolder = (props) => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={2} sm={2} lg={2} md={2}></Grid>
      <Grid item xs={u} sm={u} lg={u} md={u}>
        <div style={{ paddingRight: "35px", paddingLeft: "10px" }}>
          {props.text}
        </div>
      </Grid>
      <Grid item xs={l} sm={l} lg={l} md={l}></Grid>
    </Grid>
  );
};

export default ButtonTextHolder;
