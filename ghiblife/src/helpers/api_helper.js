import axios from "axios";
/*request services for axios*/
export const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_APIHOST,
});

export async function get(url, config = {}) {
    return await axiosApi.get(url, { ...config }).then(response => response.data)
  }