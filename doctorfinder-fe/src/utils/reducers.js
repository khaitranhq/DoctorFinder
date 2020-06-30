import Cookies from "universal-cookie";

const cookie = new Cookies();

export const initialState = {
  isLoggedIn: false,
  userProfile: {},
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
    default:
      return state;
  }
};
