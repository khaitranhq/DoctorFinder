import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const styles = (theme) => ({});

const Element2 = (props) => {
    const { classes } = props;

    const dataEle = [];

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            className={classes.secondElement}
        >
            <label className={classes.bigTitle}>
                What makes us different
            </label>
            <Grid container direction="row" justify="center">
                {dataEle !== [] ? (
                    dataEle.map((i, key) => (
                        <Grid
                            key={key}
                            container
                            direction="column"
                            alignItems="center"
                            item
                            md={4}
                            sm={4}
                            xs={12}
                            style={{ position: "relative" }}
                        >
                            <CustomCard
                                id={i.ids}
                                image={i.image}
                                title={i.title}
                                content={i.content}
                                token={token}
                            />
                        </Grid>
                    ))
                ) : (
                    <div />
                )}
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Element2);
