import { request, LOGIN_API } from "../../src/utils/apiRequest";
import Cookies from "universal-cookie";

const cookie = new Cookies();

export const useAuth = async (role = []) => {
  const token = cookie.get("token");
  const payload = { token };
  try {
    const response = await request(LOGIN_API, "POST", payload);
    return {
      userProfile: response.data,
      isLoggedIn: true,
    };
  } catch (err) {
    return { isLoggedIn: false };
  }
};
