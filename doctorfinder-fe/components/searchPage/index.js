import React from "react";
import { Grid } from "@material-ui/core";
import Element1 from "./Elements/Element1";
import Element2 from "./Elements/Element3";

const SearchPage = () => {
    const handleSubmit = async (doctorSpecialty, doctorCity, doctorName) => {
        try {
            const listDoctor = await request(GET_DOCTORS_API, "GET", {
                specialty: doctorSpecialty,
                city: doctorCity,
                name: doctorName,
            });
            return listDoctor;
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Grid>
            <Element1 onSubmit={handleSubmit} />
            <Element2 />
        </Grid>
    );
};

export default SearchPage;
