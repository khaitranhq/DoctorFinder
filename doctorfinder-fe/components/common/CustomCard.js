import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Wc, Phone, Email, Cake } from "@material-ui/icons";

const styles = (theme) => ({
    root: {
        background: "#ffffff",
        // maxWidth: theme.spacing(10),
    },
    img: {
        width: "100%",
        height: theme.spacing(25),
    },
});

const CustomCard = (props) => {
    const { classes, doctor } = props;

    const componentForAttribute = [
        { icon: <Wc />, key: "gender" },
        { icon: <Phone />, key: "phone_number" },
        { icon: <Email />, key: "email" },
        { icon: <Cake />, key: "birthday" },
    ];

    return (
        <Grid container className={classes.root}>
            <img src="/static/images/doctor2.jpg" className={classes.img} />
            <Grid item>{doctor.full_name}</Grid>
            {componentForAttribute.map((component, key) => (
                <Grid item key={key}>
                    {component.icon}
                    {doctor[component.key]}
                </Grid>
            ))}
        </Grid>
    );
};

export default withStyles(styles)(CustomCard);
