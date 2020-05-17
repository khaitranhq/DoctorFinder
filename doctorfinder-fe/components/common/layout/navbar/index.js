import React from "react";
import { AppBar, withStyles } from "@material-ui/core";
import LeftOption from "./LeftOption";
import RightOption from "./RightOption";

const styles = (theme) => ({
    appbar: {
        backgroundColor: "#FFF",
        color: "#4D4F5C",
        width: "100%",
        zIndex: 998,
    },
    navbar: {
        position: "relative",
        minHeight: 50,
        width: "100%",
    },
});

const Navbar = (props) => {
    const { classes } = props;
    return (
        <AppBar position="fixed" className={classes.appbar}>
            <div className={classes.navbar}>
                <LeftOption />
                <RightOption />
            </div>
        </AppBar>
    );
};

export default withStyles(styles)(Navbar);
