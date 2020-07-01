import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import ContactsIcon from "@material-ui/icons/Contacts";

import clsx from "clsx";

const styles = (theme) => ({
  root: {
    marginTop: 25,
  },
  wrapContact: {
    boxShadow: "0px 3px 6px #00000029",
    background: "#FFFFFF",
    padding: "15px 0px",
  },
  title: {
    fontFamily: "Roboto",
    color: "#707070",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  wrapInformation: {
    padding: "0px 17px",
  },
  marginBottom: {
    marginBottom: 12,
  },
  information: {
    paddingLeft: 10
  }
});

const ContactInformation = (props) => {
  const { classes, userProfile } = props;
  return (
    <div className={classes.root}>
      <label className={classes.title}>Liên hệ</label>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.wrapContact}
      >
        <Grid
          item
          container
          className={clsx(classes.wrapInformation, classes.marginBottom)}
        >
          <Grid item xs={1}>
            <MailIcon />
          </Grid>
          <Grid item xs={11} className={classes.information}>
            <label>{userProfile.email}</label>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={clsx(classes.wrapInformation, classes.marginBottom)}
        >
          <Grid item xs={1}>
            <PhoneIcon />
          </Grid>
          <Grid item xs={11} className={classes.information}>
            <label>{userProfile.phoneNumber}</label>
          </Grid>
        </Grid>
        <Grid item container className={classes.wrapInformation}>
          <Grid item xs={1}>
            <ContactsIcon />
          </Grid>
          <Grid item xs={11} className={classes.information}>
            <label>{userProfile.detailAddress}</label>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ContactInformation);
