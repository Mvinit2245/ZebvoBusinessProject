import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const signup = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/auth/signup",
        form
      );

      alert("Signup Successful");

      navigate("/");

    } catch (error) {

      alert("Signup Failed");
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-emerald-700 flex justify-center items-center">

      <div className="bg-white w-[420px] p-10 rounded-2xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-3">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Signup to start building websites
        </p>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-5"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <button
          onClick={signup}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
        >
          Signup
        </button>

        <p className="text-center mt-5 text-gray-600">

          Already have an account?

          <Link
            to="/"
            className="text-green-600 font-semibold ml-2"
          >
            Login
          </Link>

        </p>

      </div>

      

  
  </div>

  <Footer />
   </>
    
  );
}

export default Signup;