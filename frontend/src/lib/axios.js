import axios from "axios";

// Base URL
const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5001/api" // local backend
  : "https://chat-app-e1ns.onrender.com/api"; // deployed backend

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});