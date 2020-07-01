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
import { useAuth } from "../../components/hoc/useAuth";
import { useRouter } from "next/router";

const UserProfile = (props) => {
  const { auth, specialties, cities, appointments } = props;

  // useEffect(() => {
  //   if (auth.isLoggedIn === false) {
  //     const router = useRouter();
  //     router.push("/auth/signin");
  //   }
  // }, []);

  return (
    <Layout auth={auth}>
      <Profile
        specialties={specialties}
        cities={cities}
        appointments={appointments}
      />
    </Layout>
  );
};

UserProfile.getInitialProps = async (ctx) => {
  try {
    const auth = await useAuth();

    // if (auth.isLoggedIn === false) {
    //   Router.push("/auth/signin");
    //   return {
    //     auth,
    //   };
    // }

    const appointmentRequest = await request(APPOINTMENT_API, "GET", {
      userID: ctx.query.id,
    });

    const specialties = await request(MASTER_SPECIALTY_API, "GET");
    const cities = await request(MASTER_CITY_API, "GET");
    return {
      auth,
      appointments: appointmentRequest.data,
      specialties: specialties.data,
      cities: cities.data,
    };
  } catch (err) {
    console.error(err);
  }
};

export default UserProfile;
