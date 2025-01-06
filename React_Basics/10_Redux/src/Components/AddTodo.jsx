import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/TodoSlice';

export default function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // Prevent adding empty todos
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <form
        onSubmit={addTodoHandler}
        className="flex items-center gap-4 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-lg w-full"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}
