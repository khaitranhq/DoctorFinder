import React from "react";
import { connect } from "react-redux";
import AppointmentCard from "./components/AppointmentCard";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  wrapCard: {
    marginTop: theme.spacing(4),
  },
  title: {
    marginLeft: 135,
    fontSize: 30,
    fontWeight: "bold",
    color: "#707070",
  },
  line: {
    margin: "10px 135px 0px 135px",
    border: "1px solid #707070",
  },
});

const Schedule = (props) => {
  const { classes, appointments } = props;
  return (
    <div>
      <label className={classes.title}>Lịch hẹn</label>
      <div className={classes.line} />
      <Grid container>
        {appointments.map((appointment, key) => (
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={6}
            key={key}
            className={classes.wrapCard}
          >
            <AppointmentCard appointment={appointment} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { appointments } = state;
  return { appointments };
};

export default connect(mapStateToProps)(withStyles(styles)(Schedule));
