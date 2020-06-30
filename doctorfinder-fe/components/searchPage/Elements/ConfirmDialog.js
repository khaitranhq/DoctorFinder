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

const ConfirmDialog = (props) => {
  const { showConfirmDialog, setShowConfirmDialog } = props;

  const [appointmentTime, setAppointmentTime] = useState(new Date());

  const handleCloseConfirmDialog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirmDialog(false);
  };

  const handleCreateAppointment = () => {
    const payload = {
      
    }
  }

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
            <Button onClick={() => handleCreateAppointment()}>Đồng ý</Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
