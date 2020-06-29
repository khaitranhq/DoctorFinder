import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import WcIcon from "@material-ui/icons/Wc";
import CakeIcon from "@material-ui/icons/Cake";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

const styles = (theme) => ({
  wrapDetail: {
    boxShadow: "0px 3px 6px #00000029",
    background: "#FFFFFF",
  },
});

const DetailInformation = (props) => {
  const { classes, userProfile } = props;
  console.log(userProfile);
  return (
    <div>
      <label>Thông tin chi tiết</label>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.wrapDetail}
      >
        <Grid container>
          <Grid item xs={1}>
            <WcIcon />
          </Grid>
          <Grid item xs={11}>
            <label>{userProfile.gender ? "Nam" : "Nữ"}</label>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1}>
            <CakeIcon />
          </Grid>
          <Grid item xs={11}>
            <label>{userProfile.birthday}</label>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1}>
            <LocalHospitalIcon />
          </Grid>
          <Grid item xs={11}>
            <label>{userProfile.specialty.specialtyName}</label>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(DetailInformation);
