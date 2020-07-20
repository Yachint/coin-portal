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
    position: "relative",
  },
  paper: {
    height: "50vh",
    padding: "10px",
    borderRadius: 15,
  },
  dividerColor: {
    backgroundColor: "#3b3f45",
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
      <Typography variant="h5">Wallet {wallet.id}</Typography>
      <br />
      <br />
      <div>
        Total coins : {wallet.coins.length}
        <div className={classes.selector}>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={sortType}
            IconComponent={UnfoldLessIcon}
            onChange={(e) => handleSort(e)}
          >
            <MenuItem value={"high-low"}>Amount High-Low</MenuItem>
            <MenuItem value={"low-high"}>Amount Low-High</MenuItem>
            <MenuItem value={"A-Z"}>Arrange A-Z</MenuItem>
            <MenuItem value={"Z-A"}>Arrange Z-A</MenuItem>
          </Select>
        </div>
      </div>

      <br />
      <Divider classes={{ root: classes.dividerColor }} />
    </Grid>
  );
};

export default Title;
