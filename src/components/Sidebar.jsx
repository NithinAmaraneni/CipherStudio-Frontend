export default function Sidebar({ files, setFiles, activeFile, setActiveFile }) {
  const addFile = () => {
    const newFile = { filename: `File${files.length + 1}.js`, content: "" };
    setFiles([...files, newFile]);
    setActiveFile(newFile);
  };

  return (
    <div className="bg-black h-full w-56 p-4 border-r border-white">
      <button
        onClick={addFile}
        className="bg-white text-black px-4 py-2 font-semibold w-full mb-6 hover:bg-gray-200 transition-colors"
      >
        + ADD FILE
      </button>
      <div className="space-y-1">
        {files.map((file, idx) => (
          <div
            key={idx}
            className={`p-3 cursor-pointer border transition-colors ${
              activeFile === file
                ? "bg-white text-black border-white"
                : "bg-black text-white border-white hover:bg-white hover:text-black"
            }`}
            onClick={() => setActiveFile(file)}
          >
            <span className="font-mono text-sm">{file.filename}</span>
          </div>
        ))}
      </div>
    </div>
  );
}