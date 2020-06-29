import React, { useState } from "react";
import BasicInformation from "./basicInformation";
import ContactInformation from "./contactInformation";
import DetailInformation from "./detailInformation";
import {
  Dialog,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  DatePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Information = (props) => {
  const [userProfile, setUserProfile] = useState(props.userProfile);
  const [showPopup, setShowPopup] = useState(false);

  const [fullName, setFullName] = useState(userProfile.fullName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [detailAddress, setDetailAddress] = useState(user.detailAddress);
  const [gender, setGender] = useState(user.gender);
  const [city, setCity] = useState(user.city);
  const [specialty, setSpecialty] = useState(user.specialty);
  const [birthday, setBirthday] = useState(new Date());

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <BasicInformation
        userProfile={userProfile}
        handleShowPopup={handleShowPopup}
      />
      <ContactInformation userProfile={userProfile} />
      <DetailInformation userProfile={userProfile} />
      <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
        <label>Chỉnh sửa thông tin cá nhân</label>
        <TextField name="fullName" label="Họ và tên" />

        <FormControl>
          <InputLabel>Giới tính</InputLabel>
          <Select>
            <MenuItem>Nam</MenuItem>
            <MenuItem>Nữ</MenuItem>
          </Select>
        </FormControl>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            label="Sinh nhật"
            value={birthday}
            onChange={(date) => setBirthday(date)}
            renderInput={(props) => <TextField {...props} />}
          />
        </MuiPickersUtilsProvider>

        <TextField label="Email" />
        <TextField label="Số điện thoại" />
        <TextField label="Mật khẩu" type="password" />
        <FormControl>
          <InputLabel>Thành phố</InputLabel>
          <Select>
            <MenuItem>Đà Nẵng</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Địa chỉ cụ thể" />
        <FormControl>
          <InputLabel>Chuyên khoa</InputLabel>
          <Select>
            <MenuItem>Khoa tim mạch</MenuItem>
          </Select>
        </FormControl>
      </Dialog>
    </div>
  );
};

export default Information;
