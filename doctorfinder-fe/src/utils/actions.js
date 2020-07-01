import {
  request,
  MASTER_SPECIALTY_API,
  MASTER_CITY_API,
  LOGIN_API,
  APPOINTMENT_API,
} from "./apiRequest";

import { setCookie } from "./cookies";

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
  setCookie("token", user.token);
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
