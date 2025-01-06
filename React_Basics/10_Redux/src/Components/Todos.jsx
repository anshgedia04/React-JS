import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Redux/TodoSlice';

export default function Todos() {
  const todos = useSelector((state) => state.todos) || [];
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center mt-6">
      <ul className="space-y-4 max-w-lg w-full">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-4 bg-white/90 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <p className="text-gray-700 font-medium">{todo.text}</p>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:from-red-600 hover:to-pink-700 transition"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks available</p>
        )}
      </ul>
    </div>
  );
}
