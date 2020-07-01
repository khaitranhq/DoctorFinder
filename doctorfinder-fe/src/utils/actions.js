import {
  request,
  MASTER_SPECIALTY_API,
  MASTER_CITY_API,
  LOGIN_API,
  APPOINTMENT_API,
} from "./apiRequest";

import { setCookie } from "./cookies";
import jwtDecode from "jwt-decode";

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
  return {
    type: "AUTHENTICATE",
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

export const saveSpecialties = (specialties) => {
  return {
    type: "SAVE_SPECIALTIES",
    payload: {
      specialties,
    },
  };
};

export const saveCities = (cities) => {
  return {
    type: "SAVE_CITIES",
    payload: {
      cities,
    },
  };
};

export const saveAppointments = (appointments) => {
  return {
    type: "SAVE_APPOINTMENTS",
    payload: {
      appointments,
    },
  };
};

export const deleteAppointment = async (appointmentID) => {
  try {
    const response = await request(
      APPOINTMENT_API + `/${appointmentID}`,
      "delete"
    );
    return {
      type: "DELETE_APPOINTMENT",
      payload: {
        appointmentID,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export const validateState = (authState) => {
  return (dispatch) => {
    const decoded = jwtDecode(authState.userProfile.token);
    if (decoded.exp < new Date().getTime() / 1000) {
      dispatch(logout());
    } else {
      dispatch(restoreState(authState));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(deAuthenticateAction());
    Router.push("/auth/signin");
    //Flush current state after logout
    if (location) location.reload();
  };
};

export const restoreState = (authState) => {
  return {
    type: "RESTORE_AUTH_STATE",
    payload: authState,
  };
};

export const deAuthenticateAction = () => {
  return {
    type: "DEAUTHENTICATE",
  };
};
