import React, { useState } from "react";
import { Grid, withStyles, TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { request, GET_DOCTORS_API } from "../../../src/utils/apiRequest";

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
        fontFamily: "Philosopher",
        fontSize: 35,
        fontWeight: 800,
    },
    smallTitle: {
        fontFamily: "Philosopher",
        fontSize: 15,
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
    const { classes, onSubmit } = props;

    const [doctorSpecialty, setDoctorSpecialty] = useState("");
    const [doctorCity, setDoctorCity] = useState("");
    const [doctorName, setDoctorName] = useState("");

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
                            Bạn Cần Tư Vấn Về Sức Khỏe?
                        </label>
                    </Grid>
                    <Grid item>
                        <label className={classes.smallTitle}>
                            Hãy để chúng tôi giúp bạn giảm thời gian chờ ở bệnh
                            viện
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
                                        onChange={(e) =>
                                            setDoctorSpecialty(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                            setDoctorCity(e.target.value)
                                        }
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
                                onChange={(e) => setDoctorName(e.target.value)}
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
                            onClick={async () =>
                                await onSubmit(
                                    doctorSpecialty,
                                    doctorCity,
                                    doctorName
                                )
                            }
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

Element1.getInitialProps = async (ctx) => {
    
};

export default withStyles(styles)(Element1);
