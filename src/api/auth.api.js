import { apiRequest } from "./fetch";

// REGISTER
export const registerUser = (data) => {
  return apiRequest("/auth/v1/register", "POST", data);
};

// LOGIN
export const loginUser = (data) => {
  return apiRequest("/auth/v1/login", "POST", data);
};

// PROFILE
export const getProfile = (id) => {
  return apiRequest(`/auth/v1/getprofile/${id}`, "GET");
};

// LOGOUT
export const logoutUser = () => {
  return apiRequest("/auth/v1/logout", "GET");
};