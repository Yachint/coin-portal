import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import btcLogo from "../../logo/bitcoin.png";
import ethLogo from "../../logo/ethereum.png";
import binLogo from "../../logo/binance.png";
// import rows from '../data/rows';
import { Grid, Button, Paper } from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import { yellow, blue } from "@material-ui/core/colors";

const StyledTableRow = withStyles((theme) => ({
  root: {
    borderRadius: 10,
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRow: {
    borderSpacing: "90px",
  },
  sendColor: {
    color: yellow.A700,
  },
  receiveColor: {
    color: blue.A700,
  },
});

/**
 * Providers appropriate logo for coins
 * @param name - name of coins
 *
 * @returns img tag
 */

const logoProvider = (name) => {
  if (name === "BITCOIN") {
    return <img src={btcLogo} alt="btc" width="40px" />;
  } else if (name === "ETHEREUM") {
    return <img src={ethLogo} alt="btc" width="40px" />;
  } else {
    return <img src={binLogo} alt="btc" width="40px" />;
  }
};

export default function SimpleTable(props) {
  const classes = useStyles();

  const { rows } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow style={{ backgroundColor: "#000" }}>
            <TableCell>Coin</TableCell>
            <TableCell align="right">Holding</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right" style={{ paddingRight: "80px" }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id} className={classes.tableRow}>
              <TableCell component="th" scope="srow">
                <Grid container spacing={0}>
                  <Grid item xs={3} sm={3}>
                    {logoProvider(row.coin)}
                  </Grid>
                  <Grid item xs={9} sm={9}>
                    <div style={{ paddingTop: "8px", paddingRight: "20px" }}>
                      {row.coin}
                    </div>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align="right">{row.holding}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <div>
                  <Button
                    className={classes.receiveColor}
                    startIcon={<CallReceivedIcon />}
                    onClick={() => props.handleOpen()}
                  >
                    Receive
                  </Button>{" "}
                  |
                  <Button
                    className={classes.sendColor}
                    startIcon={<CallMadeIcon />}
                  >
                    Send
                  </Button>
                </div>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
