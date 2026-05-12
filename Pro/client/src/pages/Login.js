import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      window.location = "/dashboard";

    } catch (error) {

      alert("Invalid Credentials");

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded w-full mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded w-full mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-3 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-center">

          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-500 ml-2"
          >
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;