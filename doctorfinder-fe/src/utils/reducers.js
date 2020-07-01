import { removeCookie, setCookie } from "./cookies";

export const initialState = {
  isLoggedIn: false,
  userProfile: {},
  specialties: [],
  cities: [],
  appointments: [],
  listDoctors: [],
};

export const Reducers = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "SAVE_SPECIALTIES":
      return {
        ...state,
        specialties: action.payload.specialties,
      };
    case "SAVE_CITIES":
      return {
        ...state,
        cities: action.payload.cities,
      };
    case "SAVE_LIST_DOCTORS":
      return {
        ...state,
        listDoctors: action.payload.listDoctors,
      };
    case "SAVE_APPOINTMENTS":
      return {
        ...state,
        appointments: action.payload.appointments,
      };
    case "DELETE_APPOINTMENT":
      const newAppointments = state.appointments.filter(
        (appointment) =>
          appointment.appointmentID != action.payload.appointmentID
      );

      return {
        ...state,
        appointments: newAppointments,
      };
    case "DEAUTHENTICATE":
      removeCookie("auth");
      removeCookie("token");
      return {
        ...state,
        isLoggedIn: false,
      };
    case "AUTHENTICATE":
      const authObj = {
        ...state,
        isLoggedIn: true,
        userProfile: action.payload.user,
      };

      setCookie("auth", authObj);
      setCookie("token", authObj.userProfile.token);
      return authObj;
    case "RESTORE_AUTH_STATE":
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userProfile: action.payload.userProfile,
      };
    default:
      return state;
  }
};
