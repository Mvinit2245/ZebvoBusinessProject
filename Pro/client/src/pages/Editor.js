import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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

    alert("Saved Successfully");
  };

  if (!project)
    return <h1>Loading...</h1>;

  return (
    <div className="grid grid-cols-2 gap-5 p-5">

      <div>
        <textarea
          className="border w-full p-3 h-40"
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
          className="bg-blue-500 text-white px-5 py-2 rounded mt-3"
        >
          Save
        </button>
      </div>

      <div className="bg-gray-100 p-5 rounded">

        <img
          src={project.image}
          alt=""
          className="w-full rounded"
        />

        <h1 className="text-4xl font-bold mt-5">
          {project.hero}
        </h1>

        <p className="mt-5">
          {project.about}
        </p>

      </div>
    </div>
  );
}

export default Editor;