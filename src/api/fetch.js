const BASE_URL = "http://localhost:8000";

// generic request function
export const apiRequest = async (url, method = "GET", body = null) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 🔥 VERY IMPORTANT (cookies)
    body: body ? JSON.stringify(body) : null,
  });

  let data;
  try {
    data = await res.json();
  } catch (error) {
    // If the response is not valid JSON (e.g. 404 HTML page), throw a clear error
    throw new Error(`Server returned an invalid response (not JSON). Status: ${res.status}`);
  }

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};









// const BASE_URL = "http://localhost:8000";

// export const apiRequest = async (url, method = "GET", body = null) => {
//   const res = await fetch(`${BASE_URL}${url}`, {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: body ? JSON.stringify(body) : null,
//   });

//   let data;

//   try {
//     data = await res.json();
//   } catch {
//     throw new Error("Server returned invalid response");
//   }

//   if (!res.ok) {
//     throw new Error(data?.message || `Error ${res.status}`);
//   }

//   return data;
// };