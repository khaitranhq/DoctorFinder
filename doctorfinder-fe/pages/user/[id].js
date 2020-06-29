import React from "react";
import Layout from "../../components/common/layout";
import Profile from "../../components/user/profile";
import {
  request,
  PROFILE_API,
  MASTER_SPECIALTY_API,
  MASTER_CITY_API,
} from "../../src/utils/apiRequest";

const UserProfile = (props) => {
  const { userProfile, specialties, cities } = props;
  return (
    <Layout>
      <Profile
        userProfile={userProfile}
        specialties={specialties}
        cities={cities}
      />
    </Layout>
  );
};

UserProfile.getInitialProps = async (ctx) => {
  try {
    const user = await request(PROFILE_API + `/${ctx.query.id}`);
    const specialties = await request(MASTER_SPECIALTY_API, "GET");
    const cities = await request(MASTER_CITY_API, "GET");
    return {
      userProfile: user.data,
      specialties: specialties.data,
      cities: cities.data,
    };
  } catch (err) {
    console.error(err);
  }
};

export default UserProfile;
