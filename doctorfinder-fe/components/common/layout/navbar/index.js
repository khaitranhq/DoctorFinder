import React from "react";
import { AppBar, withStyles } from "@material-ui/core";
import LeftOption from "./LeftOption";
import RightOption from "./RightOption";

const styles = (theme) => ({
    appbar: {
        position: "fixed",
        backgroundColor: "#FFF",
        color: "#4D4F5C",
        width: "100%",
        zIndex: 998,
    },
    navbar: {
        minHeight: 60,
        boxShadow: "0px 3px 6px #00000029",
        width: "100%",
    },
});

const Navbar = (props) => {
    const { classes, page } = props;
    return (
        <AppBar position="fixed" className={classes.appbar}>
            <div className={classes.navbar}>
                <LeftOption page={page} />
                <RightOption />
            </div>
        </AppBar>
    );
};

export default withStyles(styles)(Navbar);
