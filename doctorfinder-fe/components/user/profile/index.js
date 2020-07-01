import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Information from "./information";
import Schedule from "./schedule";
import { connect } from "react-redux";
import { saveSpecialties, saveCities, saveAppointments } from "../../../src/utils/actions";

const styles = (theme) => ({
  root: {
    marginTop: 60,
    padding: "40px 0px",
  },
});

const Profile = (props) => {
  const { classes } = props;

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={3}>
        <Information />
      </Grid>
      <Grid item xs={9}>
        <Schedule />
      </Grid>
    </Grid>
  );
};

export default connect()(withStyles(styles)(Profile));
