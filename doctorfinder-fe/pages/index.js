import React from "react";
import Layout from "../components/common/layout";
import SearchPage from "../components/searchPage";
import { useAuth } from "../components/hoc/useAuth";
import { connect } from "react-redux";
import { auth } from "../src/utils/actions";

const Index = (props) => {
  const { auth } = props;

  return (
    <Layout page="home" auth={auth}>
      <SearchPage />
    </Layout>
  );
};

Index.getInitialProps = async (ctx) => {
  const auth = await useAuth();
  return {
    auth,
  };
};

export default Index;
