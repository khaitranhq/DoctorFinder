import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
    root: {
        background: "#F0F0F7",
    },
});

const Layout = (props) => {
    const { classes, children, page } = props;
    return (
        <div className={classes.root}>
            <Navbar page={page} />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default withStyles(styles)(Layout);
