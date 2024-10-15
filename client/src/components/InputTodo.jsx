import React from "react";
import "../App.css";

const InputTodo = () => {
  return (
    <>
      <h1 className="text-center mt-5 flex flex-col">Input Todo</h1>
      <form className="flex flex-col items-center">
        <input className="border border-zinc-800" type="text" />
        <button className="bg-green-500 text-red-800 m-2 p-2">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
