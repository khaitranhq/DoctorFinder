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

const ProfileDialog = (props) => {
  const { doctor, showInformationDialog, setShowInformationDialog } = props;

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
    >
      <DialogTitle>
        <IconButton onClick={(e) => handleCloseInformationDialog(e)}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          {informationArr.map((infor, key) => (
            <Grid item container direction="row" key={key}>
              <Grid item>{infor.title}</Grid>
              <Grid item>{infor.value}</Grid>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
