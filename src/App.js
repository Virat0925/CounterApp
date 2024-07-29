import React, { useState } from "react";
import "./App.css";
import CounterFunction from "./Components/CounterFunction";

function App() {
  const [count, setCount] = useState(0);

  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increase & Decrease</div>

      <CounterFunction count={count} setCount={setCount}/>

      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-md text-lg">Reset</button>
    </div>
  );
}

export default App;
