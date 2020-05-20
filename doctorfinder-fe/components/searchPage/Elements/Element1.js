import React from "react";
import { Grid, withStyles, TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const styles = (theme) => ({
    img: {
        width: "100%",
        height: theme.spacing(60),
    },
    form: {
        width: "100%",
        height: theme.spacing(60),
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        color: "#fff",
        font: "",
    },
    bigTitle: {
        fontFamily: "Roboto",
        fontSize: 50,
        fontWeight: 800,
    },
    smallTitle: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: 800,
    },
    autocomplete: {
        background: "#FFF",
        borderRadius: 5,
        width: 236,
        height: 52,
    },
    txtField: {
        background: "#FFF",
        borderRadius: 5,
        width: 236,
        height: 52,
    },
    wrapInput: {
        marginTop: 30,
        marginBottom: 6,
    },
    btn: {
        background: "#3163C1",
        width: 100,
        height: 40,
    },
});

const specialties = [{ title: "DFSDF", year: 1994 }];

const Element1 = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <img
                src="../../../static/images/download.png"
                className={classes.img}
            />
            <div className={classes.form}>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    style={{ height: "100%" }}
                    direction="column"
                >
                    <Grid item>
                        <label className={classes.bigTitle}>
                            Find The Best Doctor
                        </label>
                    </Grid>
                    <Grid item>
                        <label className={classes.smallTitle}>
                            Find the best right fit doctor for you
                        </label>
                    </Grid>
                    <Grid
                        item
                        container
                        justify="center"
                        spacing={2}
                        className={classes.wrapInput}
                    >
                        <Grid item>
                            <Autocomplete
                                options={specialties.map(
                                    (option) => option.title
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Specialty"
                                        margin="normal"
                                        variant="outlined"
                                        InputProps={{
                                            className: classes.autocomplete,
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item>
                            <Autocomplete
                                options={specialties.map(
                                    (option) => option.title
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="City"
                                        margin="normal"
                                        variant="outlined"
                                        InputProps={{
                                            className: classes.autocomplete,
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Name"
                                margin="normal"
                                variant="outlined"
                                InputProps={{
                                    className: classes.txtField,
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default withStyles(styles)(Element1);
