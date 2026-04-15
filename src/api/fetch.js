// const BASE_URL = "http://localhost:8000";
const BASE_URL = "https://learn-and-earn-contest-backend.onrender.com";


// generic request function
export const apiRequest = async (url, method = "GET", body = null) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // ?? VERY IMPORTANT (cookies)
    body: body ? JSON.stringify(body) : null,
  });

  let data;
  try {
    data = await res.json();
  } catch (error) {
    // If the response is not valid JSON (e.g. 404 HTML page), throw a clear error
    throw new Error(`Server returned an invalid response (not JSON). Status: ${res.status}`);
  }

  // Handle 401 Unauthorized - token expired or invalid
  if (res.status === 401) {
    console.warn('Unauthorized (401): Token expired or invalid. Clearing auth state.');
    
    // Clear auth state from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    
    // Redirect to login page
    window.location.href = '/#/login';
    
    // Throw error to prevent further processing
    throw new Error('Unauthorized: Please login again');
  }

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};
