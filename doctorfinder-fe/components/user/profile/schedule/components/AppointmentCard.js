import React, { useState } from "react";
import { Grid, Avatar, Button, Dialog, Typography } from "@material-ui/core";
import { Phone, Email, Home, DateRange } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import moment from "moment";
import { deleteAppointment } from "../../../../../src/utils/actions";

const styles = (theme) => ({
  root: {
    background: "#ffffff",
    width: theme.spacing(55),
    // height: theme.spacing(26),
    boxShadow: "0px 3px 6px #00000029",
  },
  wrapHeader: {
    width: "100%",
    background: "#ECECEC",
    height: "82px",
  },
  doctorName: {
    color: "#707070",
    fontFamily: "Roboto",
    fontSize: "22px",
    fontWeight: "bold",
  },
  btn: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 500,
    color: "#009688",
    border: "1px solid #009688",
    padding: "6px 12px",
  },
  marginLeft22: {
    marginLeft: 22,
    marginTop: 22,
  },
  inforText: {
    marginLeft: "8px",
  },
  wrapBtn: {
    paddingRight: 25,
    margin: "10px 0px 25px 0px",
  },
});

const AppointmentCard = (props) => {
  const { classes, appointment, userProfile, dispatch } = props;

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const user =
    userProfile.userTypeID === 1 ? appointment.patient : appointment.doctor;

  const time = moment(appointment.appointmentTime).format(
    "DD-MM-YYYY hh:mm:ss"
  );

  const handleDeleteAppointment = async () => {
    const action = await deleteAppointment(appointment.appointmentID);
    dispatch(action);
    setShowConfirmDialog(false);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.wrapHeader}
        onClick={() => setShowInformationDialog(true)}
      >
        <Grid item xs={2} container justify="center">
          <Avatar
            src="../../static/images/doctor1.jpg"
            className={classes.avatar}
          />
        </Grid>

        <Grid item xs={7}>
          <label className={classes.doctorName}>{user.fullName}</label>
        </Grid>
        <Grid item xs={3} container justify="center" alignItems="center"></Grid>
      </Grid>
      <Grid container className={classes.wrapContent}>
        <Grid item container className={classes.marginLeft22}>
          <Grid item container alignItems="center" xs={4}>
            <Phone />
            <label className={classes.inforText}>0{user.phoneNumber}</label>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            justify="flex-end"
            xs={8}
            style={{ paddingRight: 24 }}
          >
            <Email />
            <label className={classes.inforText}>{user.email}</label>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          alignItems="center"
          className={classes.marginLeft22}
        >
          <DateRange />
          <label className={classes.inforText}>{time}</label>
        </Grid>
        <Grid item container justify="flex-end" className={classes.wrapBtn}>
          <Button
            className={classes.btn}
            onClick={() => setShowConfirmDialog(true)}
          >
            Hủy lịch hẹn
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
      >
        <Typography>Bạn muốn hủy cuộc hẹn này?</Typography>
        <Grid container justify="center" alignItems="center">
          <Button onClick={() => handleDeleteAppointment()}>Đồng ý</Button>
          <Button onClick={() => setShowConfirmDialog(false)}>Hủy</Button>
        </Grid>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { userProfile } = state;
  return { userProfile };
};

export default connect(mapStateToProps)(withStyles(styles)(AppointmentCard));
