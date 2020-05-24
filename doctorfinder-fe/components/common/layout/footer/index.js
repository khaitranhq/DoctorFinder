import React from "react";
import {
    Grid,
    Hidden,
    withStyles,
    Tooltip,
    Typography,
} from "@material-ui/core";

const styles = (theme) => ({
    root: {
        padding: theme.spacing(10, 20, 2),
        backgroundColor: "#1D3F4C",
        color: "#F0F0F7",
        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(9, 15, 2),
        },
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(7, 10, 2),
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(5, 5, 2),
        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(1, 2, 1),
        },
    },
    bigTitle: {
        fontFamily: "Faster One",
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.spacing(4),
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.spacing(2.4),
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.spacing(1.8),
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: theme.spacing(1),
        },
    },
    title: {
        fontWeight: "bold",
        fontSize: theme.spacing(2),
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.spacing(1.8),
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.spacing(1.8),
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.spacing(1.4),
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: theme.spacing(1),
        },
    },
    littleTitle: {
        fontSize: theme.spacing(2),
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.spacing(1.5),
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.spacing(1.5),
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.spacing(1),
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: theme.spacing(1.2),
        },
    },
    line: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down("lg")]: {
            marginTop: theme.spacing(7),
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(3.5),
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: theme.spacing(1),
        },
        borderBottom: "1px solid",
        width: "100%",
    },
    option: {
        color: "white",
        textDecoration: "none",
        fontSize: theme.spacing(2),
        [theme.breakpoints.down("lg")]: {
            fontSize: theme.spacing(1.8),
        },
        [theme.breakpoints.down("md")]: {
            fontSize: theme.spacing(1.6),
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: theme.spacing(1.2),
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: theme.spacing(0.8),
        },
    },
});

const optionArr = [
    {
        title: "Investors",
        options: [
            { title: "Lorem ipsum" },
            { title: "Lorem ipsum" },
            { title: "Lorem ipsum" },
            { title: "Lorem ipsum" },
        ],
    },
    {
        title: "Contact",
        options: [
            { title: "napaglobal@napaglobal.com" },
            { title: "0779 789 6789" },
        ],
    },
];

const CustomizeTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

const Footer = (props) => {
    const { classes } = props;
    return (
        <Grid
            container
            direction="row"
            justify="center"
            className={classes.root}
        >
            <Hidden xsDown>
                <Grid container direction="column" item xs={3}>
                    <label className={classes.bigTitle}>DOCTOR FINDER</label>
                </Grid>
                <Grid container direction="row" item xs={9}>
                    {optionArr.map((i, key) => (
                        <Grid
                            container
                            direction="column"
                            item
                            xs={2}
                            key={key}
                        >
                            <label className={classes.title}>{i.title}</label>
                            <Grid container direction="column">
                                {i.options.map((option, key) => (
                                    <CustomizeTooltip
                                        key={key}
                                        title={option.title}
                                    >
                                        <Typography
                                            style={{ maxWidth: "100px" }}
                                            noWrap={true}
                                            className={classes.option}
                                        >
                                            {option.title}
                                        </Typography>
                                    </CustomizeTooltip>
                                ))}
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.line} />
            </Hidden>
            <Grid container direction="row" justify="center">
                <label className={classes.littleTitle}>
                    @ 2019 Napa Global, All right reserved
                </label>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Footer);
