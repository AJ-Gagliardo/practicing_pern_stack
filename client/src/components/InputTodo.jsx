import React, { useState } from "react";

import "../App.css";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="flex flex-col justify-center place-items-center">
      <h1 className="text-center mt-5 flex flex-col">Input Todo</h1>
      <form
        className="flex flex-col justify-center place-items-center"
        onSubmit={onSubmitForm}
      >
        <input
          className="border border-zinc-800"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-green-500 text-red-800 m-2 p-2">Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
