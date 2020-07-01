import { LOGIN_API, authRequest, request } from "../../src/utils/apiRequest";
import { getCookie } from "../../src/utils/cookies";

export const useAuth = async (role = []) => {
  // try {
  //   const token = getCookie("token");
  //   console.log(token);
  //   const payload = { token: token ? token : "" };
  //   const response = await request(LOGIN_API, "post", payload);
  //   return {
  //     userProfile: response.data,
  //     isLoggedIn: true,
  //   };
  // } catch (err) {
  //   console.log(err);
  //   return { isLoggedIn: true };
  // }
  return {
    userProfile: {
      avatarFileName: "patient1.png",
      birthday: "2000-07-05",
      city: {
        cityID: 1,
        cityName: "Hà Nội",
      },
      detailAddress: "17 Phần Lăng 15",
      email: "patient1@gmail.com",
      fullName: "Bệnh nhân Khải",
      gender: true,
      password: "123",
      phoneNumber: 348840993,
      specialtyID: 0,
      token:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTkzNTc3ODk1LCJleHAiOjE1OTQxODI2OTV9.m8C7O5Tork_KTMqoPVEmAVaQq9yje6RVpk64Di0zUrFKheMflzznFuhhqhcVtzOZDgOzo5HVCpP5FmtGCNUp1Q",
      userID: 2,
      userType: {
        userTypeID: 1,
        userTypeName: "Patient",
      },
    },
    isLoggedIn: true,
  };
};
