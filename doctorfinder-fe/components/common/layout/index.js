import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { authentication } from "../../../src/utils/actions";

const styles = (theme) => ({
    root: {
        background: "#F0F0F7",
    },
});

const Layout = (props) => {
    const { classes, children, page, auth, dispatch } = props;

    dispatch(authentication(auth)); 

    return (
        <div className={classes.root}>
            <Navbar page={page} />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default connect()(withStyles(styles)(Layout));
