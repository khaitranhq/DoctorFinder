import React from "react";
import {
  Dialog,
  Grid,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import moment from "moment";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    padding: "20px 20px"
  },
  wrapInformation: {
    margin: "5px 0px",
    fontSize: 17,
    color: "#707070",
  },
});

const ProfileDialog = (props) => {
  const {
    classes,
    doctor,
    showInformationDialog,
    setShowInformationDialog,
  } = props;

  const informationArr = [
    {
      title: "Họ và tên",
      value: doctor.fullName,
    },
    {
      title: "Email",
      value: doctor.email,
    },
    {
      title: "Số điện thoại",
      value: doctor.phoneNumber,
    },
    {
      title: "Giới tính",
      value: doctor.gender,
    },
    {
      title: "Ngày sinh",
      value: doctor.birthday,
    },
    {
      title: "Thành phố",
      value: doctor.city.cityName,
    },
    {
      title: "Địa chỉ cụ thể",
      value: doctor.detailAddress,
    },
    {
      title: "Chuyên khoa",
      value: doctor.specialty.specialtyName,
    },
  ];

  const handleCloseInformationDialog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowInformationDialog(false);
  };

  return (
    <Dialog
      open={showInformationDialog}
      onClose={(e) => handleCloseInformationDialog(e)}
      className={classes.root}
    >
      <DialogTitle>
        <Grid container justify="flex-end">
          <IconButton onClick={(e) => handleCloseInformationDialog(e)}>
            <Close />
          </IconButton>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          {informationArr.map((infor, key) => (
            <Grid
              item
              container
              direction="row"
              key={key}
              className={classes.wrapInformation}
            >
              <Grid item xs={3}>
                {infor.title}
              </Grid>
              <Grid item xs={9}>
                {infor.value}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default withStyles(styles)(ProfileDialog);
