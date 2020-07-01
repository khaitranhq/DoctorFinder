import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Element1 from "./Elements/Element1";
import Element2 from "./Elements/Element2";
import { request, DOCTORS_API } from "../../src/utils/apiRequest";
import { saveSpecialties, saveCities } from "../../src/utils/actions";
import { connect } from "react-redux";

const SearchPage = (props) => {
  const { specialties, cities, dispatch } = props;

  dispatch(saveSpecialties(specialties));
  dispatch(saveCities(cities));

  const [listDoctor, setListDoctor] = useState([]);

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
      <Element1 onSubmit={handleSubmit} />
      <Element2 listDoctor={listDoctor} />
    </Grid>
  );
};

export default connect()(SearchPage);
