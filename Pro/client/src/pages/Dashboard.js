import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {

  const [form, setForm] = useState({

    businessName: "",
    category: "",
    services: "",
    audience: "",
    tone: "",

    contact: {
      phone: "",
      email: "",
      address: ""
    },

    seo: {
      title: "",
      description: "",
      keywords: ""
    }

  });

  const generate = async () => {

    const res = await axios.post(
      "http://localhost:5000/api/projects/generate",
      form
    );

    window.location = `/editor/${res.data._id}`;
  };

  return (
    <>

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto py-10 px-5">

        <div className="bg-white rounded-2xl shadow-xl p-10">

          <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
            AI Website Generator
          </h1>

          <p className="text-center text-gray-500 mb-10">
            Generate professional AI-powered business websites
          </p>

          {/* BUSINESS INFO */}

          <h2 className="text-2xl font-bold mb-5 text-blue-700">
            Business Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              placeholder="Business Name"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  businessName: e.target.value
                })
              }
            />

            <input
              placeholder="Category"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value
                })
              }
            />

            <input
              placeholder="Services"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  services: e.target.value
                })
              }
            />

            <input
              placeholder="Target Audience"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  audience: e.target.value
                })
              }
            />

            <input
              placeholder="Preferred Tone"
              className="border p-3 rounded-lg md:col-span-2"
              onChange={(e) =>
                setForm({
                  ...form,
                  tone: e.target.value
                })
              }
            />

          </div>

          {/* CONTACT INFO */}

          <h2 className="text-2xl font-bold mt-10 mb-5 text-green-700">
            Contact Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              placeholder="Phone Number"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  contact: {
                    ...form.contact,
                    phone: e.target.value
                  }
                })
              }
            />

            <input
              placeholder="Business Email"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  contact: {
                    ...form.contact,
                    email: e.target.value
                  }
                })
              }
            />

            <input
              placeholder="Business Address"
              className="border p-3 rounded-lg md:col-span-2"
              onChange={(e) =>
                setForm({
                  ...form,
                  contact: {
                    ...form.contact,
                    address: e.target.value
                  }
                })
              }
            />

          </div>

          {/* SEO INFO */}

          <h2 className="text-2xl font-bold mt-10 mb-5 text-yellow-700">
            SEO Information
          </h2>

          <div className="grid gap-5">

            <input
              placeholder="SEO Title"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  seo: {
                    ...form.seo,
                    title: e.target.value
                  }
                })
              }
            />

            <textarea
              placeholder="SEO Description"
              className="border p-3 rounded-lg h-28"
              onChange={(e) =>
                setForm({
                  ...form,
                  seo: {
                    ...form.seo,
                    description: e.target.value
                  }
                })
              }
            />

            <input
              placeholder="SEO Keywords"
              className="border p-3 rounded-lg"
              onChange={(e) =>
                setForm({
                  ...form,
                  seo: {
                    ...form.seo,
                    keywords: e.target.value
                  }
                })
              }
            />

          </div>

          <button
            onClick={generate}
            className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            Generate AI Website
          </button>

        </div>

      </div>
      

    </div>

    <Footer />
    </>
  );
}

export default Dashboard;