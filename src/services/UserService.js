import axios from "axios";
import https from "https";

const instance = axios.create({
  baseURL: "https://warm-ocean-70371.herokuapp.com",
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

export const login = async (email, password) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  return instance.post("api/researcher-auth", body, config);
};

export const register = async (name, email, password) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, password });

  return instance.post("api/researchers", body, config);
};

export default {
  login,
  register
};
