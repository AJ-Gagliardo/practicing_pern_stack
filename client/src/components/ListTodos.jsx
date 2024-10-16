import { useEffect, useState } from "react";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
      console.log(deleteTodo);
    } catch (err) {
      console.error(err.message);
    }
  };

  // get todo function

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
      // console.log(jsonData);
      // console.log(todos);
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log(todos);

  useEffect(() => {
    getTodos();
    // console.log(todos);
  }, []);

  // console.log(todos);
  // console.log(todos);

  return (
    <div className="flex flex-col justify-center place-items-center">
      <h1>List Todos</h1>
      <>
        {todos.map((todo) => (
          <ul
            className="grid grid-cols-10 sm:w-2/4  gap-x-4 gap-y-2 my-4 mx-2 text-start place-content-center justify-center justify-items-center"
            key={todo.todo_id}
          >
            <li className="col-span-8 text-start">{todo.description}</li>
            <li className="col-span-1">
              <button>Edit</button>
            </li>
            <li className="col-span-1">
              <button
                className="bg-red-600"
                onClick={() => deleteTodo(todo.todo_id)}
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
      </>
    </div>
  );
}

export default ListTodos;
