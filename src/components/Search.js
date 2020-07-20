import React from "react";
import { Grid, Paper, IconButton, InputBase, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    width: 250,
    float: "right",
    marginRight: "40px",
  },
  buttons: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 225,
    height: "48px",
    float: "right",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  gridStyle: {},
}));

const Search = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} lg={12} md={12} container spacing={1}>
      <Grid item xs={6} md={9} sm={7} lg={10}>
        <Paper component="form" className={classes.root}>
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search Your Coin"
            inputProps={{ "aria-label": "search coin" }}
          />
        </Paper>
      </Grid>
      <Grid item xs={6} md={3} sm={5} lg={2}>
        <Paper className={classes.buttons}>
          <Button startIcon={<AddIcon />}>Add Coin</Button> |
          <Button startIcon={<DeleteIcon />}>Delete</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Search;
