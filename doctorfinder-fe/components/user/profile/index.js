import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Information from "./information";
import Schedule from "./schedule";

const styles = (theme) => ({
  root: {
    marginTop: 60,
    padding: "40px 50px",
  },
});

const Profile = (props) => {
  const { classes, userProfile } = props;
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={3}>
        <Information userProfile={userProfile} />
      </Grid>
      <Grid item xs={9}>
        <Schedule />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
