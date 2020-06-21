import React from 'react';
import Layout from '../components/common/layout';
import SearchPage from '../components/searchPage';
import { request, MASTER_SPECIALTY_API, MASTER_CITY_API } from '../src/utils/apiRequest';

const Index = (props) => {
    const { specialties, cities } = props;
    return (
        <Layout page="home">
            <SearchPage specialties={specialties} cities={cities} />
        </Layout>
    );
};

Index.getInitialProps = async () => {
    try{
        // const specialties = await request(MASTER_SPECIALTY_API, "GET");
        // const cities = await request(MASTER_CITY_API, "GET");
        return {
            specialties: [],
            cities: []
        }
    } catch(err) {
        console.error(err);
    }
}

export default Index;
