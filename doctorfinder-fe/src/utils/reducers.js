export const initialState = {
  auth: {
    isLogin: false,
  },
  userProfile: {},
};

export const Reducers = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "LOGIN": 
      const { userProfile } = action.payload;
      return {
        ...state,
        auth: {
          isLogin: true
        },
        userProfile
      }
    default:
      return state;
  }
};
