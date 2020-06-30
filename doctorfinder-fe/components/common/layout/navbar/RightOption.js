import React, { useEffect, useState } from "react";
import {
  ButtonBase,
  Button,
  Hidden,
  Box,
  withStyles,
  Link,
  Typography,
  IconButton,
  Collapse,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import Router from "next/router";
import { useAuth } from "../../../hoc/useAuth";
import { connect } from "react-redux";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { logout } from "../../../../src/utils/actions";

const styles = (theme) => ({
  rightOption: {
    position: "absolute",
    height: "100%",
    right: 0,
  },
  signupBtn: {
    padding: "0px 15px",
    height: "100%",
    color: "#575757",
    fontSize: 17,
    fontFamily: "Roboto",
    fontWeigth: "500",
    "&:hover": {
      backgroundColor: "#EBEBF2",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
      fontSize: 10,
    },
  },
  loginBtn: {
    margin: "10px 15px",
    padding: "7px 22px",
    color: "#fff",
    fontSize: 17,
    fontFamily: "Roboto",
    textTransform: "none",
    backgroundColor: "#00796B",
    "&:hover": {
      backgroundColor: "#EBEBF2",
      color: "#575757",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
      fontSize: 10,
    },
  },
});

const RightOption = (props) => {
  const { classes, isLoggedIn, userProfile } = props;

  const [showMenuProfile, setShowMenuProfile] = useState(false);

  console.log(userProfile);

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      className={classes.rightOption}
    >
      {!isLoggedIn ? (
        <Box>
          <ButtonBase
            className={classes.signupBtn}
            onClick={() => Router.push("/auth/signup")}
          >
            <Hidden xsDown>Đăng kí</Hidden>
            <Hidden smUp>
              <LockIcon color="action" />
            </Hidden>
          </ButtonBase>
          <Link href="/auth/signin">
            <Hidden xsDown>
              <Button className={classes.loginBtn}>Đăng nhập</Button>
            </Hidden>
            <Hidden smUp>
              <LockIcon color="action" />
            </Hidden>
          </Link>
        </Box>
      ) : (
        <Box onClick={() => setShowMenuProfile(true)}>
          <Typography>{userProfile.fullName}</Typography>
          <ArrowDropDownIcon />
          <Collapse in={showMenuProfile}>
            <ButtonBase
              onClick={() => Router.push(`/user/${userProfile.userID}`)}
            >
              Hồ sơ
            </ButtonBase>
            <ButtonBase
              onClick={() => {
                logout();
                Router.push("/auth/signin");
              }}
            >
              Đăng xuất
            </ButtonBase>
          </Collapse>
        </Box>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => {
  const { isLoggedIn, userProfile } = state;
  return { isLoggedIn, userProfile };
};

export default connect(mapStateToProps)(withStyles(styles)(RightOption));
