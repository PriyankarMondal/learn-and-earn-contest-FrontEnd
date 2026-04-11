import { apiRequest } from "./fetch";

// GET ALL CONTESTS
export const fetchContests = () => {
  return apiRequest("/student/v1/contests", "GET");
};

// JOIN CONTEST
export const joinContest = (contestId) => {
  return apiRequest("/student/v1/join", "POST", { contestId });
};

// SUBMIT WORK
export const submitWork = (data) => {
  return apiRequest("/student/v1/submit", "POST", data);
};

// GET LEADERBOARD
export const fetchLeaderboard = (contestId) => {
  return apiRequest(`/student/v1/leaderboard/${contestId}`, "GET");
};
