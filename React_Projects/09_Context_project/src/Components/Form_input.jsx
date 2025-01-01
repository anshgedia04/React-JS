import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

export default function Form_input() {
    const [todo, setTodos] = useState('');
    const { addTodo } = useContext(TodoContext);
  
    function add() {
      if (todo.trim()) {
        addTodo({ todo });
        setTodos('');
      }
    }
  
    return (
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter your todo"
          value={todo}
          onChange={(e) => setTodos(e.target.value)}
          className="border rounded-md flex-1 p-2"
        />
        <button
          onClick={add}
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
    );
  }
  