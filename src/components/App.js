import React from "react";
import { Grid, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Title from "./Title";
import CssBaseline from "@material-ui/core/CssBaseline";
import Search from "./Search";
import SideMenu from "./SideMenu";
import Synchronized from "./Synchonized";
import CoinMenu from "./CoinMenu";
import { blue } from "@material-ui/core/colors";
import GlobalState from "../context/globalState";

const App = () => {
  // const classes = useStyles();
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        light: "#ffeb3b",
        main: "#ffeb3b",
        dark: "#ffeb3b",
        contrastText: "#fff",
      },
      secondary: {
        light: blue.A400,
        main: blue.A400,
        dark: blue.A400,
        contrastText: "#fff",
      },
      background: {
        default: "#000000",
        paper: "#141921",
      },
      text: {
        primary: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalState>
        <Grid container spacing={2}>
          <Grid item xs={3} sm={3}>
            <SideMenu />
          </Grid>

          <Grid item xs={9} sm={9} container spacing={3}>
            <Synchronized />

            <Search />

            <Title />

            <CoinMenu />
          </Grid>
        </Grid>
      </GlobalState>
    </ThemeProvider>
  );
};

export default App;
