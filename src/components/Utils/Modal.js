import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    outline: "none",
  },
  paper: {
    height: "80%",
    width: "60%",
    borderRadius: "20px",
    display: "flex",
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();

  const { open, handleClose } = props;

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        disableAutoFocus={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper} variant="elevation" elevation={3}>
            {props.children}
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
