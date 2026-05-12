import { useState } from "react";
import axios from "axios";

function Dashboard() {

  const [form, setForm] = useState({
    businessName: "",
    category: "",
    services: "",
    audience: "",
    tone: ""
  });

  const generate = async () => {

    const res = await axios.post(
      "http://localhost:5000/api/projects/generate",
      form
    );

    window.location = `/editor/${res.data._id}`;
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        AI Website Builder
      </h1>

      <input
        placeholder="Business Name"
        className="border p-2 block mb-3 w-full"
        onChange={(e) =>
          setForm({
            ...form,
            businessName: e.target.value
          })
        }
      />

      <input
        placeholder="Category"
        className="border p-2 block mb-3 w-full"
        onChange={(e) =>
          setForm({
            ...form,
            category: e.target.value
          })
        }
      />

      <input
        placeholder="Services"
        className="border p-2 block mb-3 w-full"
        onChange={(e) =>
          setForm({
            ...form,
            services: e.target.value
          })
        }
      />

      <button
        onClick={generate}
        className="bg-green-500 text-white px-5 py-2 rounded"
      >
        Generate Website
      </button>
    </div>
  );
}

export default Dashboard;