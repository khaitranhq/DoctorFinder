import React from "react";
import { Avatar, Grid, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    boxShadow: "0px 3px 6px #00000029",
    background: "#FFFFFF"
  },
  avatar: {
    width: 170,
    height: 170,
  },
  horizontalLine: {
    width: "240px",
    borderTop: "2px solid #707070",
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
      <Avatar
        src="../../../../static/images/avatar-1.jpg"
        className={classes.avatar}
      />
      <div className={classes.horizontalLine} />
      <label>{userProfile.fullName}</label>
      <label>{userProfile.city.cityName}</label>
      <Link onClick={() => handleShowPopup()}>Chỉnh sửa thông tin</Link>
    </Grid>
  );
};

export default withStyles(styles)(BasicInformation);
