import React from "react";
import { ButtonBase, Hidden, Box, withStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const styles = (theme) => ({
    leftOption: {
        position: "absolute",
        height: "100%",
        left: 0,
    },
    logoBtn: {
        height: "100%",
        padding: "0px 15px",
        color: "#001924",
        fontFamily: "Orbitron",
        fontWeight: "bold",
        fontSize: 15,
        [theme.breakpoints.down("sm")]: {
            padding: "0px 10px",
            fontSize: 12,
        },
    },
    titleBtn: {
        padding: "0px 15px",
        height: "100%",
        fontFamily: "Roboto Slab",
        color: "#575757",
        fontSize: 14,
        "&:hover": {
            backgroundColor: "#EBEBF2",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 7px",
        },
    },
});

const LeftOption = (props) => {
    const { classes } = props;
    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            className={classes.leftOption}
        >
            <ButtonBase className={classes.logoBtn}>
                <Hidden mdUp>
                    <HomeIcon />
                </Hidden>
                <Hidden smDown>DOCTOR FINDER</Hidden>
            </ButtonBase>
            <Hidden smDown>
                <ButtonBase className={classes.titleBtn}>Doctor</ButtonBase>
            </Hidden>
            <Hidden smDown>
                <ButtonBase className={classes.titleBtn}>About</ButtonBase>
            </Hidden>
            <Hidden smDown>
                <ButtonBase className={classes.titleBtn}>Contact us</ButtonBase>
            </Hidden>
        </Box>
    );
};

export default withStyles(styles)(LeftOption);
