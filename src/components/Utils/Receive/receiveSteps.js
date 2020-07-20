import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DoneIcon from "@material-ui/icons/Done";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    width: "50%",
    left: "25%",
    top: "45%",
  },
  grid: {
    display: "flex",
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    display: "flex",
    width: "100%",
  },
  arrow: {
    padding: "2px",
  },
  text: {
    paddingBottom: "15px",
  },
  tick: {
    marginLeft: "80px",
  },
}));

export default function ReceiveSteps(props) {
  const classes = useStyles();
  const { incrementStep } = props;

  const [stage1, setStage1] = useState(false);
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);

  /**
   * Tells Parent component to increment Step depending on state
   * @param none
   *
   * @returns none
   */

  useEffect(() => {
    if (stage1 && stage2 && stage3) {
      incrementStep();
    }
  }, [stage1, stage2, stage3, incrementStep]);

  return (
    <div className={classes.root}>
      <Typography className={classes.text}>
        Follow the Instruction on device{" "}
      </Typography>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12} sm={12} md={12} container direction="row">
          <Paper className={classes.paper} onClick={() => setStage1(true)}>
            <Grid item xs={1}>
              <ArrowForwardIcon className={classes.arrow} />
            </Grid>
            <Grid item xs={9}>
              {stage1 ? (
                <Typography style={{ color: "#a4a9d6" }}>
                  Select the Wallet on device
                </Typography>
              ) : (
                <Typography>Select the Wallet on device</Typography>
              )}
            </Grid>
            <Grid item xs={1}>
              {stage1 ? <DoneIcon className={classes.tick} /> : <div></div>}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12} container direction="row">
          {/* <ButtonBase className={classes.paper}> */}
          <Paper className={classes.paper} onClick={() => setStage2(true)}>
            <Grid item xs={1}>
              <ArrowForwardIcon className={classes.arrow} />
            </Grid>
            <Grid item xs={9}>
              {stage2 ? (
                <Typography style={{ color: "#a4a9d6" }}>
                  Select the Coin on device
                </Typography>
              ) : (
                <Typography>Select the Coin on device</Typography>
              )}
            </Grid>
            <Grid item xs={1}>
              {stage2 ? <DoneIcon className={classes.tick} /> : <div></div>}
            </Grid>
          </Paper>
          {/* </ButtonBase> */}
        </Grid>
        <Grid item xs={12} sm={12} md={12} container direction="row">
          <Paper className={classes.paper} onClick={() => setStage3(true)}>
            <Grid item xs={1}>
              <ArrowForwardIcon className={classes.arrow} />
            </Grid>
            <Grid item xs={9}>
              {stage3 ? (
                <Typography style={{ color: "#a4a9d6" }}>
                  Tap 1 card of any 4 Cards
                </Typography>
              ) : (
                <Typography>Tap 1 card of any 4 Cards</Typography>
              )}
            </Grid>
            <Grid item xs={1}>
              {stage3 ? <DoneIcon className={classes.tick} /> : <div></div>}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
