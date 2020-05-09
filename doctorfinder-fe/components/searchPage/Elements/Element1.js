import React from "react";
import { Grid, withStyles } from "@material-ui/core";

const styles = theme => ({
    img: {
        position: "absolute",
        width: "100%",
        height: theme.spacing(75)
    },
    secondElement: {
        height: theme.spacing(75),
        zIndex: 1
    },
    bigTitle: {
        color: "#000"
    },
    smallTitle: {
        color: "#fff"
    }
});

const Element1 = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid>
                <img
                    src="../../../static/images/download.png"
                    className={classes.img}
                />
            </Grid>
            <Grid container className={classes.secondElement}>
                <Grid item>
                    <h1 className={classes.bigTitle}>DOCTOR FINDER</h1>
                </Grid>
                <Grid item>
                    <label className={classes.smallTitle}>
                        Find the best right fit doctor for you
                    </label>
                </Grid>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(Element1);
