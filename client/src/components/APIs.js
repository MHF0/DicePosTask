import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const token = localStorage.getItem("token");

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

export const productFunction = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-product`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
