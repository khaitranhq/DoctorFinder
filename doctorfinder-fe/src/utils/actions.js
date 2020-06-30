import {
  request,
  MASTER_SPECIALTY_API,
  MASTER_CITY_API,
  LOGIN_API,
} from "./apiRequest";

import Cookies from "universal-cookie";

const cookie = new Cookies();

export const getListSpecialties = async () => {
  const specialtiesRequest = await request(MASTER_SPECIALTY_API, "GET");
  const specialties = specialtiesRequest.data;
  return specialties;
};

export const getListCities = async () => {
  const citiesRequest = await request(MASTER_CITY_API, "GET");
  return citiesRequest.data;
};

export const login = (user) => {
  cookie.set("token", user.token);
  return {
    type: "LOGIN",
    payload: {
      user,
    },
  };
};

export const authentication = (auth) => {
  return {
    type: "AUTHORIZATION",
    payload: {
      ...auth,
    },
  };
};

export const logout = () => {
  cookie.remove("token");
};
