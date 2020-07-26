import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { orange } from "@material-ui/core/colors";
import { Grid, Typography, Switch, withStyles } from "@material-ui/core";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 38,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: "#ffeb3b",
    "&$checked": {
      transform: "translateX(20px)",
      color: "#ffeb3b",
      "& + $track": {
        opacity: 1,
        backgroundColor: "#000",
        borderColor: "#ffeb3b",
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "#000",
  },
  checked: {},
}))(Switch);

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
        <Badge color="primary" variant="dot" invisible={invisible}>
          <CheckCircleIcon style={{ color: sync }} />
        </Badge>
        <Typography style={{ color: sync }}> Synchronized </Typography>
        <Divider
          orientation="vertical"
          flexItem
          style={{
            marginLeft: "15px",
            marginRight: "10px",
            backgroundColor: "#D3D3D3",
          }}
        />
        <FormControlLabel
          control={
            <AntSwitch
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
