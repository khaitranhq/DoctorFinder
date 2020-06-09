import React from "react";
import { withStyles } from "@material-ui/styles";
import {
    Grid,
    CardHeader,
    CardMedia,
    CardContent,
    Avatar,
    Card,
    CardActionArea,
} from "@material-ui/core";
import CustomCard from '../../common/CustomCard';

const styles = (theme) => ({
    root: {
        padding: theme.spacing(0, 5)
    }
});

const Element3 = (props) => {
    const { classes, listDoctor } = props;
    console.log(listDoctor);

    const doctors = [
        {
            full_name: "Trần Hưng Quốc Khải",
            gender: "Nam",
            phone_number: "0889112834",
            email: "leoalan5577@gmail.com",
            birthday: "05/07/2020",
        },
        {
            full_name: "Trần Hưng Quốc Khải",
            gender: "Nam",
            phone_number: "0889112834",
            email: "leoalan5577@gmail.com",
            birthday: "05/07/2020",
        },
    ];

    return (
        <Grid
            container
            alignItems="center"
            className={classes.root}
            spacing={3}
        >
            {listDoctor.map((doctor, key) => (
                <Grid item key={key} xs={3}>
                    <CustomCard doctor={doctor}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default withStyles(styles)(Element3);
