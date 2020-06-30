import {
  request,
  MASTER_SPECIALTY_API,
  MASTER_CITY_API,
  LOGIN_API,
} from "./apiRequest";

export const getListSpecialties = async () => {
  const specialtiesRequest = await request(MASTER_SPECIALTY_API, "GET");
  const specialties = specialtiesRequest.data;
  console.log(specialties);
  return specialties;
};

export const getListCities = async () => {
  const citiesRequest = await request(MASTER_CITY_API, "GET");
  return citiesRequest.data;
};

export const login = (user) => {
  return {
    type: "LOGIN",
    payload: {
      userProfile: user,
    },
  };
};
