import React from "react";
import Layout from "../../components/common/layout";
import Profile from "../../components/user/profile";
import { request, PROFILE_API } from "../../src/utils/apiRequest";

const UserProfile = (props) => {
  const { userProfile } = props;
  return (
    <Layout>
      <Profile userProfile={userProfile} />
    </Layout>
  );
};

UserProfile.getInitialProps = async (ctx) => {
  try {
    const user = await request(PROFILE_API + `/${ctx.query.id}`);
    return { userProfile: user.data };
  } catch (err) {
    console.error(err);
  }
};

export default UserProfile;
