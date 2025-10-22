import { Sandpack } from "@codesandbox/sandpack-react";
import { useState } from "react";
import axios from "axios";
import { amethyst } from "@codesandbox/sandpack-themes";

export default function IDE({ files, setFiles, activeFile }) {
  const [projectName, setProjectName] = useState("MyProject");
  const [projectId, setProjectId] = useState("");
  const backendURL = import.meta.env.VITE_BACKEND_URL + "/api/projects";

  // ✅ Save Project to DB
  const saveProject = async () => {
    try {
      const res = await axios.post(backendURL, {
        id: projectId || null,
        name: projectName,
        files,
      });
      setProjectId(res.data._id);
      alert("Project saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Error saving project");
    }
  };

  // ✅ Load Project by ID
  const loadProject = async () => {
    try {
      const id = prompt("Enter project ID:");
      if (!id) return;
      const res = await axios.get(`${backendURL}/${id}`);
      setFiles(res.data.files);
      setProjectName(res.data.name);
      setProjectId(res.data._id);
      alert("Project loaded!");
    } catch (err) {
      console.error(err);
      alert("Invalid project ID");
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-black">
      <div className="p-3 bg-black border-b border-white flex justify-between items-center">
        <input
          className="bg-black text-white px-4 py-2 border border-white w-1/3 focus:outline-none focus:border-white"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
        />
        <div className="flex gap-3">
          <button
            onClick={saveProject}
            className="bg-white text-black px-6 py-2 font-semibold hover:bg-gray-200 transition-colors"
          >
            SAVE
          </button>
          <button
            onClick={loadProject}
            className="bg-white text-black px-6 py-2 font-semibold hover:bg-gray-200 transition-colors"
          >
            LOAD
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <Sandpack
          template="react"
          theme={amethyst}
          files={Object.fromEntries(
            files.map((f) => [`/${f.filename}`, { code: f.content }])
          )}
          options={{
            showTabs: true,
            showLineNumbers: true,
            wrapContent: true,
            editorHeight: 600,
          }}
        />
      </div>
    </div>
  );
}