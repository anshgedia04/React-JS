import { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

export default function Form_output() {
    const { deleteTodo, updataTodo, todos } = useContext(TodoContext);
    const [editableTodoId, setEditableTodoId] = useState(null);
    const [todoText, setTodoText] = useState('');
  
    function delete_todo(id) {
      deleteTodo(id);
    }
  
    function handleEdit(todo) {
      if (editableTodoId === todo.id) {
        updataTodo(todo.id, { ...todo, todo: todoText });
        setEditableTodoId(null);
      } else {
        setEditableTodoId(todo.id);
        setTodoText(todo.todo);
      }
    }
  
    return (
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 bg-gray-50 p-2 rounded-md shadow-sm"
          >
            <input
              type="text"
              value={editableTodoId === todo.id ? todoText : todo.todo}
              onChange={(e) => setTodoText(e.target.value)}
              readOnly={editableTodoId !== todo.id}
              className={`flex-1 border rounded-md p-2 ${
                editableTodoId === todo.id ? 'border-blue-500' : 'border-gray-300'
              }`}
            />
            <button
              onClick={() => handleEdit(todo)}
              className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-600 transition"
            >
              {editableTodoId === todo.id ? 'Save' : 'Edit'}
            </button>
            <button
              onClick={() => delete_todo(todo.id)}
              className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
  