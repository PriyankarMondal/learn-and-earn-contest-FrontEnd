import { apiRequest } from "./fetch";

// GET ALL CONTESTS (PUBLIC - no login required, for home page)
export const fetchPublicContests = () => {
  return apiRequest("/student/v1/public-contests", "GET");
};

// GET SINGLE CONTEST DETAILS (PUBLIC - no login required, for home page)
export const fetchPublicContestById = (contestId) => {
  return apiRequest(`/student/v1/public-contest/${contestId}`, "GET");
};

// GET ALL CONTESTS (Protected - for student dashboard)
export const fetchContests = () => {
  return apiRequest("/student/v1/contests", "GET");
};

// GET SINGLE CONTEST DETAILS (Protected - for student dashboard)
export const fetchContestById = (contestId) => {
  return apiRequest(`/student/v1/contest/${contestId}`, "GET");
};

// JOIN CONTEST
export const joinContest = (data) => {
  return apiRequest("/student/v1/join", "POST", data);
};

// SUBMIT WORK
export const submitWork = (data) => {
  return apiRequest("/student/v1/submit", "POST", data);
};

// GET LEADERBOARD
export const fetchLeaderboard = (contestId) => {
  return apiRequest(`/student/v1/leaderboard/${contestId}`, "GET");
};

// GET MY SUBMISSIONS
export const fetchMySubmissions = () => {
  return apiRequest("/student/v1/my-submissions", "GET");
};
