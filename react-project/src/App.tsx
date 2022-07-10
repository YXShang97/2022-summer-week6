import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(5);
  return (
    <div className="App">
      <div className="flex items-center justify-between max-w-[540px] mx-auto mt-20 mb-10">
        <button
          className="text-white text-lg font-bold rounded-md shadow-sm w-10 h-10 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => setNum(num - 1)}
        >
          -
        </button>
        <span className="text-5xl font-extrabold">{num}</span>
        <button
          className="text-white text-lg font-bold rounded-md shadow-sm w-10 h-10 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => setNum(num + 1)}
        >
          +
        </button>
      </div>
      <button
        className="text-white text-lg font-bold rounded-md shadow-sm px-12 py-2 bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        onClick={() => setNum(5)}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
