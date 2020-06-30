import React from "react";
import Layout from "../components/common/layout";
import SearchPage from "../components/searchPage";

const Index = (props) => {
  return (
    <Layout page="home">
      <SearchPage />
    </Layout>
  );
};

export default Index;
