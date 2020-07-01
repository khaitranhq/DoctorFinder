import React from "react";
import Layout from "../components/common/layout";
import SearchPage from "../components/searchPage";
import {
  request,
  MASTER_SPECIALTY_API,
  MASTER_CITY_API,
  LOGIN_API,
} from "../src/utils/apiRequest";
import authInit from "../src/utils/authInit";
import { saveSpecialties, saveCities } from "../src/utils/actions";

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

  await ctx.store.dispatch(saveSpecialties(specialties.data));
  await ctx.store.dispatch(saveCities(cities.data));
};

export default Index;
