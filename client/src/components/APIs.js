import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginFunction = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
