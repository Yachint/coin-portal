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
    left: "27%",
    top: "62%",
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

export default function DeviceAddressVerify(props) {
  const classes = useStyles();

  const [verifyAddress, setVerifyAddress] = useState(false);
  const { incrementStep } = props;

  /**
   * Indicate to Parent Component that work is done
   * @param none
   *
   * @returns none
   */

  useEffect(() => {
    if (verifyAddress) incrementStep();
  }, [verifyAddress, incrementStep]);

  return (
    <div className={classes.root}>
      <Typography className={classes.text}>
        Verify Address on device{" "}
      </Typography>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12} sm={12} md={12} container direction="row">
          <Paper
            className={classes.paper}
            onClick={() => setVerifyAddress(true)}
          >
            <Grid item xs={1}>
              <ArrowForwardIcon className={classes.arrow} />
            </Grid>
            <Grid item xs={9}>
              {verifyAddress ? (
                <Typography style={{ color: "#a4a9d6" }}>
                  Please match the address to be shown in X1 Wallet
                </Typography>
              ) : (
                <Typography>
                  Please match the address to be shown in X1 Wallet
                </Typography>
              )}
            </Grid>
            <Grid item xs={1}>
              {verifyAddress ? (
                <DoneIcon className={classes.tick} />
              ) : (
                <div></div>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
