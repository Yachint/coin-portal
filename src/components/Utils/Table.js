import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import MuiTableCell from "@material-ui/core/TableCell";
import btcLogo from "../../logo/btcReal.png";
import ethLogo from "../../logo/ethReal2.png";
import binLogo from "../../logo/BinanceReal.png";
// import rows from '../data/rows';
import { Grid, Button, Paper } from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import { yellow, blue } from "@material-ui/core/colors";

// const PaperTable = withStyles({
//   root: {
//     borderRadius: "16px",
//   },
// })(Paper);

const TableCell = withStyles({
  root: {
    border: "5px",
    borderColor: "#fff",
    borderCollapse: "separate",
    borderSpacing: "5px",
    padding: "10px",
  },
})(MuiTableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    borderRadius: 10,
    paddingTop: "10px",
    paddingBottom: "10px",
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRow: {
    borderSpacing: "90px",
  },
  tableSpace: {
    backgroundColor: "#000",
    height: "2px",
  },
  tableSpaceCell: {
    height: "1px",
  },
  sendColor: {
    color: yellow.A700,
  },
  receiveColor: {
    color: blue.A700,
  },
  tableItem: {
    paddingLeft: "30px",
  },
  text: {
    color: "#adabaa",
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
    return <img src={btcLogo} alt="btc" width="55px" />;
  } else if (name === "ETHEREUM") {
    return <img src={ethLogo} alt="btc" width="55px" />;
  } else {
    return <img src={binLogo} alt="btc" width="55px" />;
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
            <TableCell>
              <p style={{ color: "#474848" }}>Coin</p>
            </TableCell>
            <TableCell align="right">
              <p style={{ color: "#474848" }}>Holding</p>
            </TableCell>
            <TableCell align="right">
              <p style={{ color: "#474848" }}>Value</p>
            </TableCell>
            <TableCell align="right">
              <p style={{ color: "#474848" }}>Price</p>
            </TableCell>
            <TableCell align="right" style={{ paddingRight: "80px" }}>
              <p style={{ color: "#474848" }}>Actions</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <React.Fragment key={row.id}>
              <StyledTableRow key={row.id} className={classes.tableRow}>
                <TableCell
                  component="th"
                  scope="srow"
                  className={classes.tableItem}
                >
                  <Grid container spacing={0}>
                    <Grid item xs={3} sm={3}>
                      {logoProvider(row.coin)}
                    </Grid>
                    <Grid item xs={9} sm={9}>
                      <div style={{ paddingTop: "15px", paddingRight: "20px" }}>
                        <Typography className={classes.text}>
                          {row.coin}
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="right">
                  <Typography className={classes.text}>
                    {row.holding}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography className={classes.text}>{row.value}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography className={classes.text}>{row.price}</Typography>
                </TableCell>
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
              <StyledTableRow key={row.id * 2} className={classes.tableSpace}>
                <TableCell
                  component="th"
                  scope="srow"
                  className={classes.tableSpaceCell}
                ></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </StyledTableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
