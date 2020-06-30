import React, { useState, useEffect } from "react";
import { Grid, withStyles, TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { getListSpecialties, getListCities } from "../../../src/utils/actions";

const styles = (theme) => ({
  root: {
    marginTop: "60px",
  },
  img: {
    width: "100%",
    height: theme.spacing(64),
  },
  wrappedFloat: {
    width: "100%",
    height: theme.spacing(64),
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    color: "#ffffff",
    fontFamily: "Roboto",
    marginTop: theme.spacing(5),
  },
  bigTitle: {
    fontSize: "50px",
    fontWeight: "bold",
  },
  smallTitle: {
    fontSize: "30px",
    fontWeight: 500,
  },
  autocomplete: {
    border: "none",
    "& .MuiFormControl-marginNormal": {
      marginTop: 8,
    },
  },
  txtField: {
    background: "#FFF",
    borderRadius: 5,
    // width: "100%",
    // height: 52,
  },
  wrappedForm: {
    width: "100%",
    padding: theme.spacing(0, 15),
    marginTop: theme.spacing(2),
  },
  wrapBtn: {
    width: "100%",
    marginTop: theme.spacing(2.5),
  },
  btn: {
    background: "#00796B",
    // margin: "20px 0px",
    width: 130,
    height: 47,
    fontSize: 17,
  },
});

const Element1 = (props) => {
  const { classes, onSubmit } = props;

  const [doctorSpecialty, setDoctorSpecialty] = useState("");
  const [doctorCity, setDoctorCity] = useState("");
  const [doctorName, setDoctorName] = useState("");

  const [specialties, setSpecialties] = useState([]);
  const [cities, setCities] = useState([]);

  return (
    <div className={classes.root}>
      <img src="../../../static/images/download.png" className={classes.img} />
      <div className={classes.wrappedFloat}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "100%" }}
          direction="column"
        >
          <Grid item>
            <label className={classes.bigTitle}>Tìm kiếm bác sĩ cho bạn</label>
          </Grid>
          <Grid item>
            <label className={classes.smallTitle}>
              Nhanh chóng - Phù hợp - Uy tín
            </label>
          </Grid>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={classes.wrappedForm}
            spacing={6}
          >
            <Grid item xs={4} className={classes.wrappedInput}>
              <TextField
                fullWidth
                variant="outlined"
                label="Họ và tên"
                className={classes.txtField}
                onChange={(e) => setDoctorName(e.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                popupIcon={false}
                options={specialties}
                getOptionLabel={(specialty) => specialty.specialtyName}
                onChange={(e, specialty) => setDoctorSpecialty(specialty)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Chuyên khoa"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    style={{
                      backgroundColor: "#FFF",
                      borderRadius: "5px",
                    }}
                  />
                )}
                className={classes.autocomplete}
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                popupIcon={false}
                options={cities}
                getOptionLabel={(city) => city.cityName}
                onChange={(e, city) => setDoctorCity(city)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Thành phố"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    style={{
                      backgroundColor: "#FFF",
                      borderRadius: "5px",
                    }}
                  />
                )}
                className={classes.autocomplete}
              />
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.wrapBtn}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onSubmit(doctorSpecialty, doctorCity, doctorName)}
              className={classes.btn}
            >
              Tìm kiếm
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Element1.getInitialProps = async (ctx) => {};

export default withStyles(styles)(Element1);
