import { apiRequest } from "./fetch";

// CREATE CONTEST
export const createContest = (data) => {
  return apiRequest("/admin/v1/create", "POST", data);
};

// GET DASHBOARD STATS
export const fetchDashboardStats = () => {
  return apiRequest("/admin/v1/dashboard-stats", "GET");
};

// GET ALL SUBMISSIONS
export const fetchAllSubmissions = () => {
  return apiRequest("/admin/v1/all-submissions", "GET");
};

// GIVE SCORE
export const submitScore = (submissionId, score) => {
  return apiRequest("/admin/v1/score", "POST", { submissionId, score });
};

// GET ALL USERS (ADMIN)
export const fetchAllUsers = () => {
  return apiRequest("/admin/v1/users", "GET");
};

// TOGGLE USER STATUS
export const toggleUserVerification = (userId) => {
  return apiRequest("/admin/v1/toggle-verify", "POST", { userId });
};
