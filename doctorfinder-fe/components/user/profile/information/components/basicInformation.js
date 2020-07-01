import React from "react";
import { Avatar, Grid, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    boxShadow: "0px 3px 6px #00000029",
    background: "#FFFFFF",
    height: 294,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  horizontalLine: {
    width: "240px",
    borderTop: "2px solid #707070",
  },
  wrapAvatar: {
    marginBottom: 17,
  },
  wrapContent: {
    marginTop: 10,
  },
  fullName: {
    fontFamily: "Roboto",
    color: "#707070",
    fontSize: 22,
    fontWeight: "bold",
  },
});

const BasicInformation = (props) => {
  const { classes, userProfile, handleShowPopup } = props;
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      className={classes.root}
    >
      <Grid
        item
        container
        alignItems="center"
        justify="center"
        className={classes.wrapAvatar}
      >
        <Avatar
          src="../../../../static/images/avatar-1.jpg"
          className={classes.avatar}
        />
      </Grid>

      <div className={classes.horizontalLine} />

      <Grid item container direction="column" className={classes.wrapContent}>
        <Grid item container justify="center">
          <label className={classes.fullName}>{userProfile.fullName}</label>
        </Grid>
        <Grid item container justify="center">
          <label>{userProfile.city.cityName}</label>
        </Grid>
        <Grid item container justify="center">
          <Link onClick={() => handleShowPopup()}>Chỉnh sửa thông tin</Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(BasicInformation);
