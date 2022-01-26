import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1";

export const GET_REQUEST = async (endpoint = "", resolve, reject) => {
    const res = await axios.get(BASE_URL + endpoint);

    if (res.status === 200) {
        resolve && resolve(res?.data);
    } else {
        reject && reject(res);
    }

    return res;
};
