import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Login() {

  const navigate = useNavigate();

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

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Credentials");
    }
  };

  return (

    <>
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex justify-center items-center">

      <div className="bg-white w-[400px] p-10 rounded-2xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-3">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to AI Website generator
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          Login
        </button>

        <p className="text-center mt-5 text-gray-600">

          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-600 font-semibold ml-2"
          >
            Signup
          </Link>

        </p>

      </div>
     
    </div>
      <Footer />
    </>
    
  );
}

export default Login;