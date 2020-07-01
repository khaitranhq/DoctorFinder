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
import { connect } from "react-redux";

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
  const listDoctors = props.listDoctors ? props.listDoctors : [];

  return (
    <Grid className={classes.root}>
      {listDoctors.length === 0 ? (
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
          {listDoctors.map((doctor, key) => (
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

const mapStateToProps = (state) => {
  const { listDoctors } = state;
  return { listDoctors };
};

export default connect(mapStateToProps)(withStyles(styles)(Element2));
