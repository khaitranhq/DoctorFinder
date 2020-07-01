export const initialState = {
  isLoggedIn: false,
  userProfile: {},
  specialties: [],
  cities: [],
  appointments: [],
};

export const Reducers = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        userProfile: action.payload,
      };
    case "AUTHORIZATION":
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        userProfile: action.payload.userProfile,
      };
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
    default:
      return state;
  }
};
