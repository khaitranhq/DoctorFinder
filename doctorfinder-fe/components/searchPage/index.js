import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Element1 from "./Elements/Element1";
import Element2 from "./Elements/Element2";
import { request, DOCTORS_API } from "../../src/utils/apiRequest";
import { connect } from "react-redux";

const SearchPage = (props) => {
  const { specialties, cities, dispatch } = props;
  return (
    <Grid>
      <Element1 />
      <Element2 />
    </Grid>
  );
};

export default connect()(SearchPage);
