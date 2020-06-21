import React from "react";
import { ButtonBase, Button, Hidden, Box, withStyles, Link } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import Router from "next/router";

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
            color: "#575757"
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 10px",
            fontSize: 10,
        },
    },
});

const RightOption = (props) => {
    const { classes } = props;
    return (
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
    );
};

export default withStyles(styles)(RightOption);
