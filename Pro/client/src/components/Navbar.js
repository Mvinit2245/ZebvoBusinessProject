import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-10 py-4 flex justify-between items-center shadow-lg">

      <h1 className="text-2xl font-bold tracking-wide">
        AI Website Builder
      </h1>

      <div className="flex gap-5 items-center">

        <Link
          to="/dashboard"
          className="hover:text-yellow-300 transition duration-300"
        >
          Dashboard
        </Link>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition duration-300"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;