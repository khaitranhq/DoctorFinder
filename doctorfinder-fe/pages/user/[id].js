import React, { useEffect } from "react";
import Layout from "../../components/common/layout";
import Profile from "../../components/user/profile";
import {
  request,
  PROFILE_API,
  MASTER_SPECIALTY_API,
  MASTER_CITY_API,
  APPOINTMENT_API,
} from "../../src/utils/apiRequest";
import authInit from "../../src/utils/authInit";
import {
  saveSpecialties,
  saveCities,
  saveAppointments,
} from "../../src/utils/actions";
import Router from "next/router";
// import withAuth from "../../components/hoc/auth.hoc";

const UserProfile = (props) => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

UserProfile.getInitialProps = async (ctx) => {
  try {
    const appointmentRequest = await request(APPOINTMENT_API, "get", {
      userID: ctx.query.id,
    });
    const specialties = await request(MASTER_SPECIALTY_API, "get");
    const cities = await request(MASTER_CITY_API, "get");

    await ctx.store.dispatch(saveSpecialties(specialties.data));
    await ctx.store.dispatch(saveCities(cities.data));
    await ctx.store.dispatch(saveAppointments(appointmentRequest.data));
  } catch (err) {
    console.error(err);
  }
};

export default UserProfile;
