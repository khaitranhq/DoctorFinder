import React from "react";
import { Grid } from "@material-ui/core";
import Element1 from "./Elements/Element1";
import Element2 from "./Elements/Element2";
import { DOCTORS_API } from "../../src/utils/apiRequest";

const SearchPage = (props) => {
    const { specialties, cities } = props;

    const handleSubmit = async (doctorSpecialty, doctorCity, doctorName) => {
        try {
            const listDoctor = await request(DOCTORS_API, "GET", {
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
            <Element1  />
            <Element2
                onSubmit={handleSubmit}
                specialties={specialties}
                cities={cities}
            />
        </Grid>
    );
};

export default SearchPage;
