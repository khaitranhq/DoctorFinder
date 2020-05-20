import React from "react";
import { ButtonBase, Hidden, Box, withStyles } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

const styles = (theme) => ({
    rightOption: {
        position: "absolute",
        height: "100%",
        right: 0,
    },
    titleBtn: {
        padding: "0px 15px",
        height: "100%",
        color: "#001924",
        fontSize: 12,
        fontFamily: "Roboto Slab",
        "&:hover": {
            backgroundColor: "#EBEBF2",
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
            <ButtonBase className={classes.titleBtn}>
                <Hidden xsDown>LOG IN</Hidden>
                <Hidden smUp>
                    <LockIcon color="action" />
                </Hidden>
            </ButtonBase>

            <ButtonBase className={classes.titleBtn}>
                <Hidden xsDown>SIGN UP</Hidden>
                <Hidden smUp>
                    <LockIcon color="action" />
                </Hidden>
            </ButtonBase>
        </Box>
    );
};

export default withStyles(styles)(RightOption);
