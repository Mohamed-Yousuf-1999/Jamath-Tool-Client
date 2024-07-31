import axios from "axios";
import { config } from "../config";

const { API_BASE_URL } = config;

export const getUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const getUser = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/users`, userData);
  return response.data;
};
