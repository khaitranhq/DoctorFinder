import React from "react";
import { ButtonBase, Hidden, Box, withStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import clsx from "clsx";

const styles = (theme) => ({
    leftOption: {
        position: "absolute",
        height: "100%",
        left: 0,
    },
    logoBtn: {
        height: "100%",
        padding: "0px 30px",
        color: "#001924",
        fontFamily: "Faster One",
        fontSize: 22,
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
        fontSize: 12,
        "&:hover": {
            backgroundColor: "#EBEBF2",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 7px",
        },
    },
    borderBottom: {
        borderBottom: "solid 5px #C4212A",
    },
});

const LeftOption = (props) => {
    const { classes, page } = props;

    const pageTitles = [
        {
            label: "TRANG CHỦ",
            title: "home",
        },
        {
            label: "GIỚI THIỆU",
            title: "about",
        },
        {
            label: "LIÊN HỆ",
            title: "contact",
        },
    ];

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
                <Hidden smDown>DFINDER</Hidden>
            </ButtonBase>
            {pageTitles.map((pageTitle, key) => (
                <Hidden smDown key={key}>
                    <ButtonBase
                        className={clsx(
                            classes.titleBtn,
                            page === pageTitle.title && classes.borderBottom
                        )}
                    >
                        {pageTitle.label}
                    </ButtonBase>
                </Hidden>
            ))}
            ;
        </Box>
    );
};

export default withStyles(styles)(LeftOption);
