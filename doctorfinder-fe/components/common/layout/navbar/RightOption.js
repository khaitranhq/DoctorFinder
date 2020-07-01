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
  Grid,
  ClickAwayListener,
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
    width: "auto",
    right: 0,
  },
  fullName: {
    fontSize: 17,
    fontFamily: "Roboto",
    color: "#575757",
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
  menuProfile: {
    position: "fixed",
    top: 60,
    backgroundColor: "#FFF",
    borderLeft: "1px solid #EBEBF2",
    borderBottom: "1px solid #EBEBF2",
    borderRight: "1px solid #EBEBF2",
  },
  itemMenuProfile: {
    width: "100%",
    fontSize: 14,
    display: "block",
    textAlign: "left",
    padding: theme.spacing(2, 2),
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#EBEBF2",
    },
  },
});

const RightOption = (props) => {
  const { classes, isLoggedIn, userProfile } = props;

  const [showMenuProfile, setShowMenuProfile] = useState(false);

  const handleClickAway = () => {
    setShowMenuProfile(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          className={classes.rightOption}
        >
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
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box
            onClick={() => setShowMenuProfile(!showMenuProfile)}
            display="flex"
            flexDirection="row"
            alignItems="center"
            className={classes.rightOption}
          >
            <Typography className={classes.fullName}>
              {userProfile.fullName}
            </Typography>
            <ArrowDropDownIcon />
            <Collapse in={showMenuProfile} className={classes.menuProfile}>
              <Grid container direction="column">
                <ButtonBase
                  onClick={() => Router.push(`/user/${userProfile.userID}`)}
                  className={classes.itemMenuProfile}
                >
                  Hồ sơ
                </ButtonBase>
                <ButtonBase
                  className={classes.itemMenuProfile}
                  onClick={() => {
                    logout();
                    Router.push("/auth/signin");
                  }}
                >
                  Đăng xuất
                </ButtonBase>
              </Grid>
            </Collapse>
          </Box>
        </ClickAwayListener>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isLoggedIn, userProfile } = state;
  return { isLoggedIn, userProfile };
};

export default connect(mapStateToProps)(withStyles(styles)(RightOption));
