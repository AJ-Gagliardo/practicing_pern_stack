import { useState } from "react";
// import "./index.css";

import "./App.css";

// components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <>
      <h1 className="text-slate-700">Home</h1>
      <InputTodo className="" />
      <ListTodos />
    </>
  );
}

export default App;
