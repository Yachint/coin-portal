import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function WalletList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  /**
   * Handles Click event for Wallet selection
   * @param none
   *
   * @returns none
   */

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText primary="Wallets" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            value={1}
            onClick={() => props.handleWalletChange(1)}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Wallet 1" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            value={2}
            onClick={() => props.handleWalletChange(2)}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Wallet 2" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            value={3}
            onClick={() => props.handleWalletChange(3)}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Wallet 3" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
