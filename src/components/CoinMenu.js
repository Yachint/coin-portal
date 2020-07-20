import React, { useContext, useEffect, useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import Table from "./Utils/Table";
import row from "./data/rows";
import AppContext from "../context/appContext";
import Modal from "./Utils/Modal";
import Receive from "./functions/receive";

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingLeft: "10px",
    float: "top",
    display: "flex",
  },
  dividerColor: {
    backgroundColor: "#3b3f45",
  },
  paper: {
    height: "50vh",
    padding: "10px",
    borderRadius: 15,
    width: "100%",
    textAlign: "center",
  },
  contentPaper: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginRight: "110px",
  },
}));

const CoinMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const context = useContext(AppContext);

  const { updateCoins } = context.actions;

  /**
   * For Automatically selection Wallet number 1 when rendered
   * @param none
   *
   * @returns none
   */

  const autoUpdate = useCallback(() => {
    updateCoins(row);
  }, [updateCoins]);

  useEffect(() => {
    autoUpdate();
  }, [autoUpdate]);

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12}>
      <Modal open={open} handleClose={handleClose}>
        {" "}
        <Receive />{" "}
      </Modal>
      <div className={classes.grid}>
        {context.wallet.coins.length === 0 ? (
          <Paper elevation={3} className={classes.paper}>
            <div className={classes.contentPaper}>
              <Typography variant="h3">No coins in your Wallet!</Typography>
              <Button
                style={{ left: "-22%", top: "15%" }}
                variant="outlined"
                color="secondary"
              >
                Add Coins
              </Button>
            </div>
          </Paper>
        ) : (
          <Table rows={context.wallet.coins} handleOpen={handleOpen} />
        )}
      </div>
    </Grid>
  );
};

export default CoinMenu;
