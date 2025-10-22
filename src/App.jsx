import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import IDE from "./components/IDE";
import './App.css';

export default function App() {
  const [files, setFiles] = useState([
    { filename: "App.js", content: "export default function App(){ return <h1>Hello CipherStudio!</h1> }" },
  ]);
  const [activeFile, setActiveFile] = useState(files[0]);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar
          files={files}
          setFiles={setFiles}
          activeFile={activeFile}
          setActiveFile={setActiveFile}
        />
        <div className="flex-1 bg-gray-900">
          <IDE
            files={files}
            setFiles={setFiles}
            activeFile={activeFile}
          />
        </div>
      </div>
    </div>
  );
}