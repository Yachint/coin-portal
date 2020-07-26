import React from "react";
import "./Stepper.css";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "50%",
    left: "25%",
    top: "25%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  step: {
    color: "#000",
    "&$active": {
      fill: "white",
      "& $text": {
        fill: "#034691",
      },
    },
  },
}));

/**
 * Returns strings to display underneath Steppers
 * @param none
 *
 * @returns array of string indicating name of each Step
 */

function getSteps() {
  return ["Device", "Verification", "Receive"];
}

export default function HorizontalLabelPositionBelowStepper(props) {
  const classes = useStyles();
  const { activeStep } = props;
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.step}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
