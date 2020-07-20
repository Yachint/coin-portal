import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { orange } from "@material-ui/core/colors";
import { Grid, Typography, Switch } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    float: "right",
    paddingTop: "15px",
    flexDirection: "row",
    "& > *": {
      marginBottom: theme.spacing(1),
    },
    "& .MuiBadge-root": {
      marginRight: theme.spacing(2),
    },
  },
  textColor: {
    color: orange.A700,
  },
}));

const Synchronized = () => {
  const classes = useStyles();
  const [invisible, setInvisible] = React.useState(true);
  const [sync, setSync] = React.useState("");

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
    if (sync === "") {
      setSync(orange.A700);
    } else {
      setSync("");
    }
  };

  return (
    <Grid item xs={12} sm={12}>
      <div className={classes.root}>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <CheckCircleIcon style={{ color: sync }} />
        </Badge>
        <Typography style={{ color: sync }}> Synchronized </Typography>
        <Divider
          orientation="vertical"
          flexItem
          style={{ marginLeft: "15px" }}
        />
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={!invisible}
              onChange={handleBadgeVisibility}
            />
          }
          style={{ marginLeft: "3px", marginTop: "-7px" }}
        />
      </div>
    </Grid>
  );
};

export default Synchronized;
