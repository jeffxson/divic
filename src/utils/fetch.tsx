import axios from "axios";
import { BaseURL } from "./url";

//Auth
export const loginUser = async (data: object) => {
  return axios.post(`${BaseURL}/login`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const getShippingDetails = async (data: object) => {
  return axios.post(`${BaseURL}/frappe.client.get`, data, {
    withCredentials: true,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
};
