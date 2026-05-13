import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Editor() {

  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {

    axios.get("http://localhost:5000/api/projects")
    .then(res => {

      const found = res.data.find(p => p._id === id);

      setProject(found);
    });

  }, [id]);

  const updateProject = async () => {

    await axios.put(
      `http://localhost:5000/api/projects/${id}`,
      project
    );

    alert("Project Saved Successfully");
  };

  if (!project)
    return <h1>Loading...</h1>;

  return (

    <>
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="grid lg:grid-cols-2 gap-5 p-5">

        <div className="bg-white rounded-2xl shadow-xl p-6">

          <h2 className="text-2xl font-bold mb-5 text-blue-700">
            Website Editor
          </h2>

          <label className="font-semibold">
            Hero Section
          </label>

          <textarea
            className="border w-full p-4 rounded-lg h-40 mt-2"
            value={project.hero}
            onChange={(e) =>
              setProject({
                ...project,
                hero: e.target.value
              })
            }
          />

          <button
            onClick={updateProject}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
          >
            Save Project
          </button>

        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          <img
            src={project.image}
            alt="banner"
            className="w-full h-72 object-cover"
          />

          <div className="p-8">

            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              {project.hero}
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              {project.about}
            </p>

            {/* Services */}

<div className="mt-10">

  <h2 className="text-3xl font-bold text-blue-700 mb-4">
    Our Services
  </h2>

  <p className="text-gray-700 leading-7">
    {project.servicesSection}
  </p>

</div>

{/* FAQ */}

<div className="mt-10">

  <h2 className="text-3xl font-bold text-blue-700 mb-4">
    FAQs
  </h2>

  {
    project.faq?.map((item, index) => (

      <div
        key={index}
        className="bg-gray-100 p-4 rounded-lg mb-3"
      >

        <h3 className="font-bold">
          {item.question}
        </h3>

        <p className="text-gray-600 mt-2">
          {item.answer}
        </p>

      </div>
    ))
  }

</div>

{/* Testimonials */}

<div className="mt-10">

  <h2 className="text-3xl font-bold text-blue-700 mb-4">
    Testimonials
  </h2>

  <div className="grid md:grid-cols-3 gap-4">

    {
      project.testimonials?.map((item, index) => (

        <div
          key={index}
          className="bg-blue-50 p-5 rounded-xl shadow"
        >

          <h3 className="font-bold text-lg">
            {item.name}
          </h3>

          <p className="text-gray-600 mt-2">
            {item.review}
          </p>

        </div>
      ))
    }

  </div>

</div>

{/* Contact */}

<div className="mt-10">

  <h2 className="text-3xl font-bold text-blue-700 mb-4">
    Contact Us
  </h2>

  <div className="bg-gray-100 p-5 rounded-xl">

    <p>
      <strong>Phone:</strong>
      {" "}
      {project.contact?.phone}
    </p>

    <p className="mt-2">
      <strong>Email:</strong>
      {" "}
      {project.contact?.email}
    </p>

    <p className="mt-2">
      <strong>Address:</strong>
      {" "}
      {project.contact?.address}
    </p>

  </div>

</div>

{/* SEO */}

<div className="mt-10">

  <h2 className="text-3xl font-bold text-blue-700 mb-4">
    SEO Information
  </h2>

  <div className="bg-yellow-50 p-5 rounded-xl">

    <p>
      <strong>SEO Title:</strong>
      {" "}
      {project.seo?.title}
    </p>

    <p className="mt-2">
      <strong>Description:</strong>
      {" "}
      {project.seo?.description}
    </p>

    <p className="mt-2">
      <strong>Keywords:</strong>
      {" "}
      {project.seo?.keywords}
    </p>

  </div>

</div>

            <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl text-lg">
              Get Started
            </button>

          </div>

        </div>

      </div>
      

    </div>
    <Footer />
    </>
  );
}

export default Editor;