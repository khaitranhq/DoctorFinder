import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Element1 from "./Elements/Element1";
import Element2 from "./Elements/Element2";
import { request, DOCTORS_API } from "../../src/utils/apiRequest";
import Element3 from "./Elements/Element3";

const SearchPage = props => {
    const { specialties, cities } = props;
    const [listDoctor, setListDoctor] = useState([])

    const handleSubmit = async (doctorSpecialty, doctorCity, doctorName) => {
        try {
            const listDoctor = await request(DOCTORS_API, "post", {
                specialtyID: doctorSpecialty.specialtyID,   
                cityID: doctorCity.cityID,
                fullName: doctorName,
            });
            setListDoctor(listDoctor.data);
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
            <Element3 listDoctor={listDoctor}/>
        </Grid>
    );
};

export default SearchPage;
