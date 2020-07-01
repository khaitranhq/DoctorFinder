import React, { useState } from "react";
import BasicInformation from "./components/basicInformation";
import ContactInformation from "./components/contactInformation";
import DetailInformation from "./components/detailInformation";
import {
  Dialog,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  DialogTitle,
  DialogContent,
  Grid,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { request, PROFILE_API } from "../../../../src/utils/apiRequest";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    marginLeft: 87,
    padding: theme.spacing(0, 6),
  },
  input: {
    margin: "10px 0px",
  },
});

const Information = (props) => {
  const { specialties, cities, classes } = props;

  const [userProfile, setUserProfile] = useState(props.userProfile);

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (key, value) => {
    if (key === "city") {
      const city = cities.find((city) => city.cityID === value);
      setUserProfile({ ...userProfile, city });
      return;
    }

    if (key === "specialty") {
      const specialty = specialties.find(
        (specialty) => specialty.specialtyID === value
      );
      setUserProfile({ ...userProfile, specialty });
      return;
    }

    setUserProfile({ ...userProfile, [key]: value });
  };

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleSubmit = async () => {
    const payload = {
      ...userProfile,
      cityID: userProfile.city.cityID,
      specialtyID: userProfile.specialty.specialtyID,
      userTypeID: userProfile.userType.userTypeID,
    };
    try {
      await request(PROFILE_API + "/1", "put", payload);
      setShowPopup(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={classes.root}>
      <BasicInformation
        userProfile={userProfile}
        handleShowPopup={handleShowPopup}
      />
      <ContactInformation userProfile={userProfile} />
      <DetailInformation userProfile={userProfile} />
      <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
        <DialogTitle>
          <label>Chỉnh sửa thông tin cá nhân</label>
        </DialogTitle>
        <DialogContent>
          <Grid container direction="column">
            <TextField
              label="Họ và tên"
              value={userProfile.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className={classes.input}
            />

            <FormControl className={classes.input}>
              <InputLabel>Giới tính</InputLabel>
              <Select
                value={userProfile.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <MenuItem value={true}>Nam</MenuItem>
                <MenuItem value={false}>Nữ</MenuItem>
              </Select>
            </FormControl>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                label="Sinh nhật"
                value={userProfile.birthday}
                onChange={(date) => handleChange("birthday", date)}
                renderInput={(props) => <TextField {...props} />}
                className={classes.input}
              />
            </MuiPickersUtilsProvider>

            <TextField
              label="Email"
              value={userProfile.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={classes.input}
            />
            <TextField
              className={classes.input}
              label="Số điện thoại"
              value={userProfile.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
            <TextField
              className={classes.input}
              label="Mật khẩu"
              type="password"
              value={userProfile.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <FormControl className={classes.input}>
              <InputLabel>Thành phố</InputLabel>
              <Select
                value={userProfile.city.cityID}
                onChange={(e) => handleChange("city", e.target.value)}
              >
                {cities.map((city, key) => (
                  <MenuItem key={key} value={city.cityID}>
                    {city.cityName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              className={classes.input}
              label="Địa chỉ cụ thể"
              value={userProfile.detailAddress}
              onChange={(e) => handleChange("detailAddress", e.target.value)}
            />

            {userProfile.specialty && (
              <FormControl className={classes.input}>
                <InputLabel>Chuyên khoa</InputLabel>
                <Select
                  value={userProfile.specialty.specialtyID}
                  onChange={(e) => handleChange("specialty", e.target.value)}
                >
                  {specialties.map((specialty, key) => (
                    <MenuItem key={key} value={specialty.specialtyID}>
                      {specialty.specialtyName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            <Button onClick={() => handleSubmit()}>Chấp nhận</Button>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { userProfile, specialties, cities } = state;
  return { userProfile, specialties, cities };
};

export default connect(mapStateToProps)(withStyles(styles)(Information));
