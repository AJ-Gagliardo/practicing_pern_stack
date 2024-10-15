import { useEffect } from "react";

function ListTodos() {
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  });

  return (
    <div>
      <h1>List Todos</h1>
    </div>
  );
}

export default ListTodos;
