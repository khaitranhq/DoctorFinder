import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Avatar, Button } from "@material-ui/core";
import { Home, Phone, Email } from "@material-ui/icons";
import clsx from "clsx";
import ProfileDialog from "../searchPage/Elements/ProfileDialog";
import ConfirmDialog from "../searchPage/Elements/ConfirmDialog";

const styles = (theme) => ({
  root: {
    background: "#ffffff",
    width: theme.spacing(55),
    height: theme.spacing(26),
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
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 500,
    background: "#009688",
    // marginLeft: "109px",
  },
  marginLeft22: {
    marginLeft: 22,
    marginTop: 22,
  },
  inforText: {
    marginLeft: "8px",
  },
});

const CustomCard = (props) => {
  const { classes, doctor } = props;

  const [showInformationDialog, setShowInformationDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleShowConfirmDialog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirmDialog(true);
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
          <label className={classes.doctorName}>{doctor.fullName}</label>
        </Grid>
        <Grid item xs={3} container justify="center" alignItems="center">
          <Button
            className={classes.btn}
            onClick={(e) => handleShowConfirmDialog(e)}
          >
            Đăng kí
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.wrapContent}>
        <Grid item container className={classes.marginLeft22}>
          <Grid item container alignItems="center" xs={4}>
            <Phone />
            <label className={classes.inforText}>0{doctor.phoneNumber}</label>
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
            <label className={classes.inforText}>{doctor.email}</label>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          alignItems="center"
          className={classes.marginLeft22}
        >
          <Home />
          <label className={classes.inforText}>{doctor.detailAddress}</label>
        </Grid>
      </Grid>

      <ProfileDialog
        doctor={doctor}
        showInformationDialog={showInformationDialog}
        setShowInformationDialog={setShowInformationDialog}
      />

      <ConfirmDialog
        showConfirmDialog={showConfirmDialog}
        setShowConfirmDialog={setShowConfirmDialog}
      />
    </div>
  );
};

export default withStyles(styles)(CustomCard);
