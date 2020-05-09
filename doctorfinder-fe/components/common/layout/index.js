import React from "react";
import Navbar from './navbar';
import Footer from './footer';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
});

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
