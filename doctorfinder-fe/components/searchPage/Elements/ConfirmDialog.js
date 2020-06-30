import React, { useState } from "react";
import {
  Dialog,
  Grid,
  DialogTitle,
  DialogContent,
  Button,
} from "@material-ui/core";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { connect } from "react-redux";
import { request, APPOINTMENT_API } from "../../../src/utils/apiRequest";
import moment from "moment";

const ConfirmDialog = (props) => {
  const {
    showConfirmDialog,
    setShowConfirmDialog,
    doctor,
    userProfile,
  } = props;

  const [appointmentTime, setAppointmentTime] = useState(new Date());

  const handleCloseConfirmDialog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirmDialog(false);
  };

  const handleCreateAppointment = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const time = moment(appointmentTime, "YYYY-MM-DD hh:mm:ss").format(
      "YYYY-MM-DD hh:mm:ss"
    );
    let timeString = time.substring(0, 10) + "T" + time.substring(11);

    const payload = {
      doctorID: doctor.userID,
      patientID: userProfile.userID,
      appointmentTime: timeString,
    };

    try {
      await request(APPOINTMENT_API, "POST", payload);
      setShowConfirmDialog(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog
      open={showConfirmDialog}
      onClose={(e) => handleCloseConfirmDialog(e)}
    >
      <DialogTitle>Xác nhận</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                fullWidth
                label="Ngày hẹn"
                value={appointmentTime}
                onChange={setAppointmentTime}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid>
            <Button onClick={(e) => handleCloseConfirmDialog(e)}>Hủy</Button>
            <Button onClick={(e) => handleCreateAppointment(e)}>Đồng ý</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  const { userProfile } = state;
  return { userProfile };
};

export default connect(mapStateToProps)(ConfirmDialog);
