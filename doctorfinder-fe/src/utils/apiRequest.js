import axios from "axios";

const API = "http://localhost:8080/api"

export const request = (url, method, payload = {}) => {
    return axios({
        method: method,
        url: `${API}${url}`,
        data: payload,
    });
};

export const GET_DOCTORS_API = "/doctors";