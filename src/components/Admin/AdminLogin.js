import React, { useContext, useState } from "react";
import Axios from "../../Axios";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Send a POST request to the backend sign-in endpoint
      const response = await Axios.post(
        "/user/login",
        { username, password },
        { withCredentials: true }
      );

      localStorage.setItem("token", response.data.token);

      // Display success message
      console.log(response.data.message);
      window.location.href = "/admin/data";
    } catch (error) {
      // Display error message
      setError(error.response.data.error);
    }
  };

  return (
    <form
      className="max-w-sm mx-auto mt-6 p-6 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <label className="block font-bold text-gray-700">Username:</label>
        <input
          className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold text-gray-700">Password:</label>
        <input
          className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
