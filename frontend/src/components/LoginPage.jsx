import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    // Check token on page load
    const token = localStorage.getItem("token");
    if (token) {
      login();
    }
  }, [login]);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const formData = new URLSearchParams({
      username: data.username,
      password: data.password,
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        toast.success("User logged in successfully");
        localStorage.setItem("token", response.data.token);
        login(); // Call login to set state
        navigate("/"); // Redirect to HomePage or desired route
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Toaster />
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
        <form className="mt-6" onSubmit={loginUser}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              required
              onChange={handleInputChange}
              name="username"
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              required
              onChange={handleInputChange}
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
