import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import {
  request,
  API_AUTH_REGISTER_ENTRY_POINT,
  REGISTER_API,
  MASTER_SPECIALTY_API,
  MASTER_CITY_API,
} from "../../src/utils/apiRequest";
import Router from "next/router";
import { connect } from "react-redux";
import { FormControlLabel } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Autocomplete } from "@material-ui/lab";
import clsx from "clsx";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";

const useStyles = (theme) => ({
  containerWrapper: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  wrapForm: {
    padding: theme.spacing(5, 0),
  },
  left: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: "url(/static/images/authentic.png)",
    backgroundSize: "cover",
  },
  logoTitle: {
    fontWeight: "Bold",
    color: "#232241",
    fontSize: 30,
    lineHeight: "17px",
    fontFamily: "Orbitron",
    color: "#1D3F4C",
    textAlign: "center",
    marginTop: theme.spacing(1.5),
    "&:hover": {
      cursor: "pointer",
    },
  },
  signUpDescription: {
    fontSize: 15,
    lineHeight: "12px",
    color: "#00363A",
    opacity: 1,
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(4),
    textAlign: "center",
    fontFamily: "Roboto Slab",
  },
  textFieldInput: {
    width: "100%",
    // marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    "& .MuiFormHelperText-contained, .MuiFormHelperText-root": {
      marginTop: 0,
    },
    "& .MuiInputBase-input": {
      height: 38,
    },
  },
  marginBottom: {
    marginBottom: 19,
  },
  selectAccess: {
    width: "100%",
    marginTop: theme.spacing(0.5),
    marginBottom: 23,
    "& .MuiFormHelperText-contained, .MuiFormHelperText-root": {
      marginTop: 0,
    },
  },
  checkboxLabel: {
    color: "#000000",
    fontFamily: "Roboto Slab",
    fontSize: 14,
    lineHeight: "18px",
  },
  term: {
    textDecoration: "None",
    color: "#006064",
    fontSize: 14,
    lineHeight: 1,
    fontFamily: "Roboto Slab",
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: "10px 14px",
    fontSize: 16,
    fontFamily: "Roboto Slab",
  },
  inputSelect: {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 14px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      background: "none",
    },
  },
  autocomplete: {
    "& .MuiFormControl-marginNormal": {
      marginTop: 0,
      marginBottom: 19,
    },
  },
  datePicker: {
    width: "100%",
    marginBottom: 19,
  },
  btnInput: {
    width: "100%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    // "&:hover": {
    //   backgroundColor: "#496A78 "
    // },
  },
  formControl: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
  signin: {
    textDecoration: "None",
    color: "#3163C1",
    fontSize: 10,
    lineHeight: "17px",
    fontFamily: "Roboto Slab",
  },
});

const initialState = {
  userTypeID: 1,

  fullName: "",
  fullNameError: false,

  gender: true,

  email: "",
  emailError: false,

  password: "",
  passwordError: false,

  confirmPassword: "",
  confirmPasswordError: false,
  messageConfirmPasswordError: "",

  phoneNumber: "",
  phoneNumberError: false,

  birthday: new Date(),

  city: {},
  cityError: false,

  detailAddress: "",

  specialty: {},
  specialtyError: false,

  checkbox: false,
};
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static async getInitialProps() {
    const specialties = await request(MASTER_SPECIALTY_API, "get");
    const cities = await request(MASTER_CITY_API, "get");

    return {
      namespacesRequired: ["sign-up"],
      specialties: specialties.data,
      cities: cities.data,
    };
  }

  handleChange = (e, value) => {
    if (typeof e === "string") this.setState({ [e]: { ...value } });
    else this.setState({ [e.target.name]: e.target.value });
  };

  handleChangeCheckbox = (e) => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
  };
  validate = () => {
    let fullNameError = false;
    let emailError = false;
    let passwordError = false;
    let confirmPasswordError = false;

    if (!this.state.fullName || this.state.fullName.trim() === "") {
      fullNameError = true;
    }
    
    if (this.state.confirmPassword != this.state.password) {
      confirmPasswordError = true;
      this.setState({
        messageConfirmPasswordError: "Xác nhận mật khẩu không khơpr",
      });
    }

    if (this.state.confirmPassword === "") {
      confirmPasswordError = true;
      this.setState({
        messageConfirmPasswordError: "Xác nhận mât khẩu không được để trống",
      });
    }

    if (this.state.password.length < 6 || this.state.password.length > 30) {
      passwordError = true;
    }

    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(this.state.email).toLowerCase())) {
      emailError = true;
    }

    if (this.state.phoneNumber === "") {
      this.setState({
        phoneNumberError: true,
      });
    }

    if (this.state.city === {}) {
      this.setState({
        cityError: true,
      });
    }

    if (this.state.userTypeID === 1 && this.state.specialty === {}) {
      this.setState({
        specialtyError: true,
      });
    }

    if (emailError || fullNameError || passwordError || confirmPasswordError) {
      this.setState({
        emailError,
        fullNameError,
        passwordError,
        confirmPasswordError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      try {
        const userToPost = {
          userTypeID: this.state.userTypeID,
          fullName: this.state.fullName,
          email: this.state.email,
          password: this.state.password,
          phoneNumber: this.state.phoneNumber,
          detailAddress: this.state.detailAddress,
          cityID: this.state.city.cityID,
          specialtyID:
            this.state.specialty !== {} ? this.state.specialty.specialtyID : "",
          birthday: moment(this.state.birthday).format("YYYY-MM-DD"),
          avatarFileName: "doctor1.png",
          gender: this.state.gender,
        };

        const result = await request(REGISTER_API, "post", {
          ...userToPost,
        });
        if (result) {
          Router.push("/auth/signin");
        }
      } catch (err) {
        alert("Đăng kí không thành công");
      }
    }
  };

  handleNavigate = () => {
    Router.push("/");
  };

  render() {
    const { classes, specialties, cities } = this.props;
    return (
      <Grid container direction="row">
        <Grid
          data-cy="picture"
          item
          xs={true}
          sm={4}
          md={6}
          className={classes.left}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          container
          direction="row"
          alignItems="center"
          justify="center"
          className={classes.wrapForm}
        >
          <Grid
            container
            direction="column"
            item
            xs={10}
            sm={8}
            md={8}
            className={classes.containerWrapper}
          >
            <label className={classes.logoTitle} onClick={this.handleNavigate}>
              DOCTOR FINDER
            </label>
            <label data-cy="page-title" className={classes.signUpDescription}>
              Chào mừng bạn đến với Doctor Finder
            </label>
            <form noValidate onSubmit={this.handleSubmit}>
              <FormControl
                className={classes.selectAccess}
                id="form-select-access"
              >
                <Select
                  className={classes.inputSelect}
                  id="select-access"
                  onChange={this.handleChange}
                  value={this.state.userTypeID}
                  name="userTypeID"
                >
                  <MenuItem value={1}>Bác sĩ</MenuItem>
                  <MenuItem value={2}>Bệnh nhân</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                className={classes.selectAccess}
                id="form-select-access"
              >
                <Select
                  className={classes.inputSelect}
                  id="select-access"
                  onChange={this.handleChange}
                  value={this.state.gender}
                  name="gender"
                >
                  <MenuItem value={true}>Nam</MenuItem>
                  <MenuItem value={false}>Nữ</MenuItem>
                </Select>
              </FormControl>
              <TextField
                name="fullName"
                placeholder="Họ và tên"
                color="primary"
                variant="outlined"
                value={this.state.fullName}
                onChange={this.handleChange}
                classes={{ root: classes.textFieldInput }}
                InputProps={{ classes: { input: classes["input"] } }}
                error={this.state.fullNameError}
                helperText={
                  this.state.fullNameError ? "Tên không được để trống" : " "
                }
              />
              <TextField
                type="email"
                name="email"
                id="email"
                color="primary"
                variant="outlined"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                classes={{ root: classes.textFieldInput }}
                InputProps={{ classes: { input: classes["input"] } }}
                error={this.state.emailError}
                helperText={this.state.emailError ? "Email không hợp lệ" : " "}
              />
              <TextField
                name="password"
                id="password"
                type="password"
                placeholder="Mật khẩu"
                value={this.state.password}
                onChange={this.handleChange}
                color="primary"
                variant="outlined"
                classes={{ root: classes.textFieldInput }}
                InputProps={{ classes: { input: classes["input"] } }}
                error={this.state.passwordError}
                helperText={
                  this.state.passwordError
                    ? "Mật khẩu phải lớn hơn 6 kí tự"
                    : " "
                }
              />
              <TextField
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Xác nhận mật khẩu"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                color="primary"
                variant="outlined"
                classes={{ root: classes.textFieldInput }}
                InputProps={{ classes: { input: classes["input"] } }}
                error={this.state.confirmPasswordError}
                helperText={
                  this.state.confirmPasswordError
                    ? this.state.messageConfirmPasswordError
                    : " "
                }
              />
              <TextField
                name="phoneNumber"
                id="phoneNumber"
                color="primary"
                variant="outlined"
                placeholder="Số điện thoại"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                classes={{ root: classes.textFieldInput }}
                InputProps={{ classes: { input: classes["input"] } }}
                error={this.state.phoneNumberError}
                helperText={
                  this.state.phoneNumberError
                    ? "Số điện thoại không được để trống"
                    : " "
                }
              />
              <Autocomplete
                popupIcon={false}
                options={cities}
                getOptionLabel={(city) => city.cityName}
                onChange={(e, city) => this.handleChange("city", city)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Thành phố"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                )}
                className={classes.autocomplete}
              />
              <TextField
                name="detailAddress"
                id="detailAddress"
                placeholder="Địa chỉ cụ thể"
                value={this.state.detailAddress}
                onChange={this.handleChange}
                color="primary"
                variant="outlined"
                classes={{
                  root: clsx(classes.textFieldInput, classes.marginBottom),
                }}
                InputProps={{ classes: { input: classes["input"] } }}
              />
              <Autocomplete
                popupIcon={false}
                options={specialties}
                disabled={this.state.userTypeID === 2}
                getOptionLabel={(specialty) => specialty.specialtyName}
                onChange={(e, specialty) =>
                  this.handleChange("specialty", specialty)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Chuyên khoa"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                  />
                )}
                className={classes.autocomplete}
              />{" "}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  label="Sinh nhật"
                  value={this.state.birthday}
                  onChange={(date) => handleChange("birthday", date)}
                  renderInput={(props) => <TextField {...props} />}
                  className={classes.datePicker}
                />
              </MuiPickersUtilsProvider>
              <Grid container direction="row" className={classes.formControl}>
                <Grid
                  container
                  direction="row"
                  item
                  xs={12}
                  id="form-checkbox-register"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={this.state.checkbox}
                        onClick={this.handleChangeCheckbox}
                        color="primary"
                        name="checkbox"
                        id="checkbox"
                      />
                    }
                    label={
                      <label className={classes.checkboxLabel}>
                        Chấp nhận điều khoản sử dụng
                      </label>
                    }
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                className={classes.btnInput}
                disabled={!this.state.checkbox}
                type="submit"
              >
                <a>Đăng kí</a>
              </Button>
            </form>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <label className={classes.signin} style={{ color: "#006064" }}>
                Đã có tài khoản? Đăng nhập tại
              </label>
              &nbsp;
              <Link href="./  signin">
                <a data-cy="link-to-signin" className={classes.signin}>
                  đây
                </a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const { sidebar } = state;
  return { sidebar };
}

export default connect(mapStateToProps)(withStyles(useStyles)(SignUp));
