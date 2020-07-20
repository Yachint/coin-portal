import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    width: "100%",
  },
  paper: {
    display: "flex",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "80vh",
    borderStyle: "dotted",
  },
  text: {
    padding: "10px",
    paddingRight: "5px",
    color: "#FFD700",
  },
}));

export default function PreVerifiedCode(props) {
  const classes = useStyles();

  const { coinAddress } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.text}>
            {" "}
            {coinAddress}{" "}
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
