import React from "react";
import { withStyles } from "@material-ui/styles";
import {
  Grid,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Card,
  CardActionArea,
} from "@material-ui/core";
import CustomCard from "../../common/CustomCard";
import { Label } from "@material-ui/icons";

const styles = (theme) => ({
  wrapCards: {
    width: "100%",
    padding: theme.spacing(8, 0),
  },
  wrapNoResult: {
    height: theme.spacing(90),
  },
  notFoundText: {
    fontFamily: "Roboto",
    fontSize: "25px",
    fontWeight: "bold",
    color: "#618C93",
    marginTop: theme.spacing(4),
  },
  marginCard: {
    marginTop: theme.spacing(4),
  },
});

const Element2 = (props) => {
  const { classes } = props;

  const listDoctor = [
    {
      avatarFileName: "doctor1.png",
      birthday: "2000-07-05",
      city: { cityID: 1, cityName: "Hà Nội" },
      detailAddress: "17 Phần Lăng 15, Hải Châu, Đà Nẵng",
      email: "doctor1@gmail.com",
      fullName: "Bác sĩ Khải",
      gender: true,
      password: "123",
      phoneNumber: 889112834,
      specialty: { specialtyID: 1, specialtyName: "Khoa Thần Kinh" },
      userID: 1,
      userType: { userTypeID: 1, userTypeName: "Doctor" },
    },
  ];

  return (
    <Grid className={classes.root}>
      {listDoctor.length === 0 ? (
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          className={classes.wrapNoResult}
        >
          <img src="../../../static/images/not_found.png" />
          <label className={classes.notFoundText}>
            Không có kết quả tìm kiếm
          </label>
        </Grid>
      ) : (
        <Grid
          container
          alignItems="center"
          className={classes.wrapCards}
          spacing={3}
        >
          {listDoctor.map((doctor, key) => (
            <Grid
              item
              container
              justify="center"
              key={key}
              xs={4}
              className={classes.marginCard}
            >
              <CustomCard doctor={doctor} />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default withStyles(styles)(Element2);
