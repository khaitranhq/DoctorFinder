import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const styles = (theme) => ({

});

const Element2 = (props) => {
    const { classes } = props;
    return (<div>
        <div>What makes us different</div>
        <Grid container>
            <Grid item>
                <Grid><img /></Grid>
                <Grid></Grid>
                <Grid></Grid>
            </Grid>
        </Grid>
    </div>);
};

export default withStyles(styles)(Element2);
