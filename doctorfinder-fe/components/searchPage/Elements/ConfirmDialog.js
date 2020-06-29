import React from "react";
import {
  Dialog,
  Grid,
  DialogTitle,
  DialogContent,
  Button,
} from "@material-ui/core";

const ConfirmDialog = (props) => {
  const { showConfirmDialog, setShowConfirmDialog } = props;

  const handleCloseConfirmDialog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirmDialog(false);
  };

  return (
    <Dialog
      open={showConfirmDialog}
      onClose={(e) => handleCloseConfirmDialog(e)}
    >
      <DialogTitle>Xác nhận</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid>Bạn muốn đăng kí lịch hẹn với bác sĩ này?</Grid>
          <Button onClick={(e) => handleCloseConfirmDialog(e)}>Hủy</Button>
          <Button>Đồng ý</Button>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
