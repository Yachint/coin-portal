import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button, Divider } from "@material-ui/core";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PaymentIcon from "@material-ui/icons/Payment";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import SettingsIcon from "@material-ui/icons/Settings";
import WalletList from "./Helpers/WalletList";
import ListButtons from "./Helpers/ListButtons";
import AppContext from "../context/appContext";

// DUMMY DATA - For testing purposes
import rows from "./data/rows";
import rows2 from "./data/rows2";
import rows3 from "./data/rows3";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "90vh",
    padding: "10px",
    borderRadius: 15,
    width: "100%",
    maxWidth: "400px",
  },
  SideGrid: {
    paddingTop: "20px",
    paddingLeft: "20px",
  },
  button: {
    textAlign: "center",
    alignSelf: "center",
    width: "90%",
    height: "10vh",
    textTransform: "none",
  },
  longButton: {
    width: "100%",
    height: "10vh",
    textTransform: "none",
  },
  dividerColor: {
    backgroundColor: "#3b3f45",
  },
  divButton: {
    padding: "10px",
    paddingBottom: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  divBottomButton: {
    alignItems: "bottom",
    justifyContent: "bottom",
    position: "relative",
    bottom: "-10px",
  },
  buttonBeneficiary: {
    width: "80%",
    height: "6vh",
    textTransform: "none",
  },
  buttonSupport: {
    width: "100%",
    height: "6vh",
    bottom: "-80px",
    textTransform: "none",
    backgroundColor: "green",
    borderColor: "green",
    color: "#fff",
  },
}));

const SideMenu = () => {
  const context = useContext(AppContext);

  const classes = useStyles();

  /**
   * Updates coins array in context with appropriate data
   * @param walletId - Id of the selected wallet
   *
   * @returns none
   */

  const handleWalletChange = (walletId) => {
    context.actions.updateWallet(walletId);

    if (walletId === 1) {
      context.actions.updateCoins(rows);
    } else if (walletId === 2) {
      context.actions.updateCoins(rows2);
    } else {
      context.actions.updateCoins(rows3);
    }
  };

  return (
    <div className={classes.SideGrid}>
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <ListButtons label={"Portfolio"} icon={<LibraryBooksIcon />} />
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <WalletList handleWalletChange={handleWalletChange} />
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ListButtons label={"Last Transaction"} icon={<PaymentIcon />} />
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ListButtons label={"Tutorials"} icon={<OndemandVideoIcon />} />
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ListButtons label={"Settings"} icon={<SettingsIcon />} />
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className={classes.divButton}>
              <Button
                className={classes.buttonBeneficiary}
                variant="outlined"
                color="secondary"
              >
                Make Beneficiary
              </Button>
            </div>
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className={classes.divBottomButton}>
              <Button
                className={classes.buttonSupport}
                variant="outlined"
                color="secondary"
              >
                Support
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SideMenu;
