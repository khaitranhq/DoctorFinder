import React, { useEffect } from "react";
import Layout from "../components/common/layout";
import SearchPage from "../components/searchPage";
import { useAuth } from "../components/hoc/useAuth";
import { connect } from "react-redux";
import {
  request,
  MASTER_SPECIALTY_API,
  MASTER_CITY_API,
  LOGIN_API,
} from "../src/utils/apiRequest";
import { getCookie } from "../src/utils/cookies";
import authInit from "../src/utils/authInit";

const Index = (props) => {
  const { specialties, cities } = props;

  return (
    <Layout page="home">
      <SearchPage specialties={specialties} cities={cities} />
    </Layout>
  );
};

Index.getInitialProps = async (ctx) => {
  authInit(ctx);
  const specialties = await request(MASTER_SPECIALTY_API, "get");
  const cities = await request(MASTER_CITY_API, "get");
  return {
    specialties: specialties.data,
    cities: cities.data,
  };
};

export default Index;
