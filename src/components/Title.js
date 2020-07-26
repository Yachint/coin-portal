import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import AppContext from "../context/appContext";
import UnfoldLessIcon from "@material-ui/icons/UnfoldLess";

const useStyles = makeStyles((theme) => ({
  selector: {
    float: "right",
    position: "absolute",
    left: "87%",
    top: "23%",
    borderBottom: "none",
  },
  paper: {
    height: "50vh",
    padding: "10px",
    borderRadius: 15,
  },
  dividerColor: {
    backgroundColor: "#3b3f45",
  },
  selectOptions: {
    color: "#beb4a8",
  },
}));

const Title = () => {
  const context = useContext(AppContext);

  const { actions, wallet } = context;

  const [sortType, setSortType] = useState("high-low");

  const classes = useStyles();

  /**
   * Handles sorting of coins by calling function from context
   * @param e - event that is fired by clicking
   *
   * @returns none
   */

  const handleSort = (e) => {
    setSortType(e.target.value);
    actions.sortCoins(wallet.coins, sortType);
  };

  return (
    <Grid item xs={12} sm={12}>
      <Typography variant="h4" style={{ color: "#e2c19d" }}>
        Wallet {wallet.id}
      </Typography>
      <br />
      <br />
      <div>
        <Typography style={{ color: "#adabaa", paddingLeft: "40px" }}>
          Total coins : {wallet.coins.length}
        </Typography>
        <div className={classes.selector}>
          <Grid container>
            <Grid item xs={2} sm={2} style={{ paddingTop: "20px" }}>
              <UnfoldLessIcon style={{ color: "#c78d4e" }} />
            </Grid>

            <Grid item xs={10} sm={10}>
              <Select
                labelId="sort-label"
                id="sort-select"
                disableUnderline
                value={sortType}
                // IconComponent={UnfoldLessIcon}
                onChange={(e) => handleSort(e)}
              >
                <MenuItem value={"high-low"}>
                  <p className={classes.selectOptions}>Amount High-Low</p>
                </MenuItem>
                <MenuItem value={"low-high"}>
                  <p className={classes.selectOptions}>Amount Low-High</p>
                </MenuItem>
                <MenuItem value={"A-Z"}>
                  <p className={classes.selectOptions}>Arrange A-Z</p>
                </MenuItem>
                <MenuItem value={"Z-A"}>
                  <p className={classes.selectOptions}>Arrange Z-A</p>
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </div>
      </div>

      <br />
      <Divider classes={{ root: classes.dividerColor }} />
    </Grid>
  );
};

export default Title;
