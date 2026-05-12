import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded w-full mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded w-full mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded w-full mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <button
          onClick={signup}
          className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded"
        >
          Signup
        </button>

        <p className="mt-4 text-center">

          Already have an account?

          <Link
            to="/"
            className="text-blue-500 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;