const BASE_URL = "http://localhost:8000";
// const BASE_URL = "https://learn-and-earn-contest-backend.onrender.com";


// generic request function
export const apiRequest = async (url, method = "GET", body = null) => {
  // 🔥 CHECK IF BODY IS FORMDATA (FOR FILE UPLOADS)
  const isFormData = body instanceof FormData;
  
  const requestConfig = {
    method,
    credentials: "include", // VERY IMPORTANT (cookies)
  };

  // 🔥 SET HEADERS - DON'T SET Content-Type FOR FORMDATA (browser handles it with boundary)
  if (!isFormData) {
    requestConfig.headers = {
      "Content-Type": "application/json",
    };
    requestConfig.body = body ? JSON.stringify(body) : null;
  } else {
    // For FormData, don't set Content-Type header - browser will automatically set it
    requestConfig.body = body;
  }

  const res = await fetch(`${BASE_URL}${url}`, requestConfig);

  let data;
  try {
    const text = await res.text();
    data = text ? JSON.parse(text) : {};
  } catch (error) {
    data = {};
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
    const errorMsg = data?.message || res.statusText || 'Unknown Connection Error';
    const error = new Error(errorMsg);
    error.status = res.status;
    throw error;
  }

  return data;
};
