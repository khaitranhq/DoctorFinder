import React, { useEffect } from "react";
import Layout from "../components/common/layout";
import SearchPage from "../components/searchPage";
import { useAuth } from "../components/hoc/useAuth";
import { connect } from "react-redux";
import { auth } from "../src/utils/actions";
import {
  request,
  MASTER_SPECIALTY_API,
  MASTER_CITY_API,
  LOGIN_API,
} from "../src/utils/apiRequest";
import { getCookie } from "../src/utils/cookies";

const Index = (props) => {
  const { auth, specialties, cities } = props;

  return (
    <Layout page="home" auth={auth}>
      <SearchPage specialties={specialties} cities={cities} />
    </Layout>
  );
};

Index.getInitialProps = async (ctx) => {
  const token = getCookie("token");
  const auth = await useAuth();
  const specialties = await request(MASTER_SPECIALTY_API, "get");
  const cities = await request(MASTER_CITY_API, "get");
  return {
    auth: auth,
    specialties: specialties.data,
    cities: cities.data,
  };
};

export default Index;
