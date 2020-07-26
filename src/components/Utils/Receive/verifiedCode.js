import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Typography, Button, Snackbar } from "@material-ui/core";

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
    width: "85vh",
  },
  text: {
    padding: "10px",
    paddingRight: "5px",
    color: "#FFD700",
  },
  button: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  title: {
    paddingBottom: "20px",
    paddingLeft: "30px",
    color: "#adabaa",
  },
}));

export default function VerifiedCode(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { coinAddress } = props;

  /**
   * Both event listners for Snackbar to indicate Successfull Copy
   * @param none
   *
   * @returns none
   */

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        <Typography className={classes.title}>Coin Address</Typography>
        <Paper className={classes.paper} style={{ backgroundColor: "#24272b" }}>
          <div>
            <Typography variant="h4" className={classes.text}>
              {" "}
              {coinAddress}{" "}
            </Typography>
          </div>
          <div className={classes.button}>
            <Button
              variant="contained"
              color="secondary"
              style={{
                height: "80%",
                top: "10%",
                backgroundColor: "#333538",
                textTransform: "none",
                borderRadius: 10,
              }}
              onClick={() => {
                navigator.clipboard.writeText(coinAddress);
                handleClick();
              }}
            >
              <p style={{ color: "#e2c19d", borderRadius: "50" }}>Copy</p>
            </Button>
          </div>
        </Paper>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Address Copied!"
        action={
          <React.Fragment>
            <IconButton size="small" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
