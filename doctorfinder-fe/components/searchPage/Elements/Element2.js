import React, { useState } from "react";
import { Grid, withStyles, TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const styles = (theme) => ({
    autocomplete: {
        background: "#FFF",
        borderRadius: "10px",
        width: "100%",
        height: "52px",
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
        margin: "20px 0px",
        width: 100,
        height: 40,
    },
});

const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
];

const Element2 = (props) => {
    const { classes, specialties, cities } = props;
    console.log(specialties);
    console.log(cities);
    const [doctorSpecialty, setDoctorSpecialty] = useState("");
    const [doctorCity, setDoctorCity] = useState("");
    const [doctorName, setDoctorName] = useState("");

    return (
        <div style={{ background: "#fff" }}>
            <Grid
                container
                container
                justify="center"
                spacing={2}
                className={classes.wrapInput}
            >
                <Grid item xs={3}>
                    <Autocomplete
                        popupIcon={false}
                        options={specialties.map(
                            (option) => option.specialtyName
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="freeSolo"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                        className={classes.autocomplete}
                    />
                </Grid>
                <Grid item xs={3}>
                <Autocomplete
                        popupIcon={false}
                        options={cities.map(
                            (option) => option.cityName
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="freeSolo"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                        className={classes.autocomplete}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Name"
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setDoctorName(e.target.value)}
                        InputProps={{
                            className: classes.txtField,
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
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
    );
};

export default withStyles(styles)(Element2);
