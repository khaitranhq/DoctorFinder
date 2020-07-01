import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import WcIcon from "@material-ui/icons/Wc";
import CakeIcon from "@material-ui/icons/Cake";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import clsx from "clsx";

const styles = (theme) => ({
  root: {
    marginTop: 25,
  },
  title: {
    fontFamily: "Roboto",
    color: "#707070",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  wrapDetail: {
    boxShadow: "0px 3px 6px #00000029",
    background: "#FFFFFF",
    padding: "15px 0px",
  },
  wrapInformation: {
    padding: "0px 17px",
  },
  marginBottom: {
    marginBottom: 12,
  },
  information: {
    paddingLeft: 10,
  },
});

const DetailInformation = (props) => {
  const { classes, userProfile } = props;
  return (
    <div className={classes.root}>
      <label className={classes.title}>Thông tin chi tiết</label>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.wrapDetail}
      >
        <Grid
          container
          className={clsx(classes.wrapInformation, classes.marginBottom)}
        >
          <Grid item xs={1}>
            <WcIcon />
          </Grid>
          <Grid item xs={11} className={classes.information}>
            <label>{userProfile.gender ? "Nam" : "Nữ"}</label>
          </Grid>
        </Grid>
        <Grid
          container
          className={
            userProfile.specialty
              ? clsx(classes.wrapInformation, classes.marginBottom)
              : classes.wrapInformation
          }
        >
          <Grid item xs={1}>
            <CakeIcon />
          </Grid>
          <Grid item xs={11} className={classes.information}>
            <label>{userProfile.birthday}</label>
          </Grid>
        </Grid>
        {userProfile.specialty && (
          <Grid container className={classes.wrapInformation}>
            <Grid item xs={1}>
              <LocalHospitalIcon />
            </Grid>
            <Grid item xs={11} className={classes.information}>
              <label>{userProfile.specialty.specialtyName}</label>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(DetailInformation);
