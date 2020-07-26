import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Button,
  Divider,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import TxIco from "../logo/tx.png";
import TutorialsIco from "../logo/Tutorials.png";
import SettingsIco from "../logo/Settings.png";
import WalletList from "./Helpers/WalletList";
import PortFolioIco from "../logo/portfolio.png";
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
    borderBottomRightRadius: "25px",
  },
  divBottomButton: {
    alignItems: "bottom",
    justifyContent: "bottom",
    position: "relative",
    bottom: "-124px",
    height: "100%",
  },
  buttonBeneficiary: {
    width: "80%",
    height: "6vh",
    textTransform: "none",
  },
  buttonSupport: {
    position: "absolute",
    width: "105%",
    height: "8vh",
    top: "40%",
    left: "-2%",
    textTransform: "none",
    backgroundColor: "#4b3c2b",
    borderColor: "green",
    color: "#fff",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
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
        <Grid container spacing={1} style={{ height: "80%" }}>
          <Grid item xs={12} sm={12}>
            <ListButtons
              label={"Portfolio"}
              icon={<img src={PortFolioIco} alt="portfolio" width="40px" />}
            />
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <WalletList handleWalletChange={handleWalletChange} />
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ListButtons
              label={"Last Transaction"}
              icon={<img src={TxIco} alt="portfolio" width="40px" />}
            />
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ListButtons
              label={"Tutorials"}
              icon={<img src={TutorialsIco} alt="portfolio" width="40px" />}
            />
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <ListButtons
              label={"Settings"}
              icon={<img src={SettingsIco} alt="portfolio" width="40px" />}
            />
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className={classes.divButton}>
              <Button
                className={classes.buttonBeneficiary}
                variant="outlined"
                color="secondary"
              >
                <Typography>Make Beneficiary</Typography>
              </Button>
            </div>
            <Divider classes={{ root: classes.dividerColor }} />
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className={classes.divBottomButton}>
              <ButtonBase
                className={classes.buttonSupport}
                variant="outlined"
                color="secondary"
              >
                <Typography>Support</Typography>
              </ButtonBase>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SideMenu;
