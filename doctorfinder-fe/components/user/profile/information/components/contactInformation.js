import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import ContactsIcon from "@material-ui/icons/Contacts";

const styles = (theme) => ({
  wrapContact: {
    boxShadow: "0px 3px 6px #00000029",
    background: "#FFFFFF",
  },
});

const ContactInformation = (props) => {
  const { classes, userProfile } = props;
  return (
    <div>
      <label>Liên hệ</label>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.wrapContact}
      >
        <Grid container>
          <Grid item xs={1}>
            <MailIcon />
          </Grid>
          <Grid item xs={11}>
            <label>{userProfile.email}</label>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1}>
            <PhoneIcon />
          </Grid>
          <Grid item xs={11}>
            <label>{userProfile.phoneNumber}</label>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1}>
            <ContactsIcon />
          </Grid>
          <Grid item xs={11}>
            <label>{userProfile.detailAddress}</label>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ContactInformation);
