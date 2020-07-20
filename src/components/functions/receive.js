import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Steppers from "../Utils/Steppers";
import InfoIcon from "@material-ui/icons/Info";
import ReceiveSteps from "../Utils/Receive/receiveSteps";
import PreVerifiedCode from "../Utils/Receive/preVerifiedCode";
import DeviceAddressVerify from "../Utils/Receive/deviceAddressVerify";
import VerifiedCode from "../Utils/Receive/verifiedCode";

const useStyles = makeStyles((theme) => ({
  divName: {
    float: "center",
    paddingTop: "40px",
  },
  divHelper: {
    display: "flex",
    width: "100%",
    heigth: "100%",
  },
  grid: {
    display: "flex",
    width: "100%",
  },
  code: {
    float: "center",
    left: "50px",
  },
  reverify: {
    position: "absolute",
    left: "47%",
    marginTop: "150px",
  },
}));

const Receive = () => {
  const classes = useStyles();

  //DUMMY ADDRESS
  const coinAddress = "25BKJNKNLJL58fjkdhfk26dnfk26dnfds15";

  const [activeStep, setActiveStep] = useState(0);

  /**
   * Increments the Step of the <Steppers /> Component
   * @param none
   *
   * @returns none
   */

  const incrementStep = () => {
    setActiveStep(activeStep + 1);
  };

  /**
   * Renders Appropriate Interface depending on the StepCounter's current Step
   * @param none
   *
   * @returns A grid with the appropriate components for Verification of Card
   */

  const renderInterface = () => {
    if (activeStep === 0) {
      return (
        <Grid
          item
          xs={7}
          sm={7}
          lg={7}
          md={7}
          style={{ width: "80vh", maxWidth: "65%" }}
        >
          <ReceiveSteps incrementStep={incrementStep} />
        </Grid>
      );
    } else if (activeStep === 1) {
      return (
        <Grid
          item
          xs={7}
          sm={7}
          lg={7}
          md={7}
          style={{ width: "80vh", maxWidth: "65%" }}
        >
          <div>
            <PreVerifiedCode
              className={classes.code}
              coinAddress={coinAddress}
            />
            <DeviceAddressVerify
              className={classes.addressVerify}
              incrementStep={incrementStep}
            />
          </div>
        </Grid>
      );
    } else if (activeStep === 2) {
      return (
        <Grid
          item
          xs={7}
          sm={7}
          lg={7}
          md={7}
          style={{ width: "80vh", maxWidth: "75%" }}
        >
          <div>
            <VerifiedCode coinAddress={coinAddress} />
          </div>
          <div style={{ marginTop: "30px" }}>
            <div style={{ float: "left" }}>
              <InfoIcon color="secondary" />
            </div>
            <div style={{ float: "left", paddingLeft: "5px" }}>
              <Typography color="secondary">Address Verified</Typography>
            </div>
          </div>
          <div>
            <Button
              className={classes.reverify}
              variant="outlined"
              color="secondary"
              style={{ textTransform: "none", height: "50px", width: "150px" }}
              onClick={() => setActiveStep(0)}
            >
              Re-Verify
            </Button>
          </div>
        </Grid>
      );
    }
  };

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <Grid item xs={2} sm={2} lg={2} md={2}>
        <div className={classes.divName}>
          <Typography variant="h4"> Receive </Typography>
        </div>
      </Grid>

      <Grid item xs={3} sm={3} lg={3} md={3}>
        <Steppers activeStep={activeStep} />
      </Grid>

      {renderInterface()}
    </Grid>
  );
};

export default Receive;
