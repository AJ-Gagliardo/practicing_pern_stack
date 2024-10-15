import { useState } from "react";
// import "./index.css";

import "./App.css";

import InputTodo from "./components/InputTodo";

function App() {
  return (
    <>
      <h1 className="text-red-400">Home</h1>
      <InputTodo className="bg-black" />
    </>
  );
}

export default App;
